import { Composer } from "grammy";
import { bot } from "../../../bot";
import { TriggeredUser } from "../../entities/TriggeredUser";

export const filters = new Composer();

filters.command("trigger", async (ctx) => {
    try {
        const arg_chunk = ctx.match.split(/\s+/);
        const args = [arg_chunk.shift(), arg_chunk.join(" ")];
        
        // If there are no args passed, throw an error.
        if (args[0] === "") throw new Error('No args passed!');
        
        /*
        * The format for valid input would be a reply to a message with 
        * /trigger <count> <message>
        * where 
        *       count = no of messages after which the bot responds
        *       message = message which the bot replies to the user
        */
        // Follow the proper template to send request
        if (args.length !== 2) throw new Error('Invalid Format!');

        const count: number = parseInt(args[0]!);
        const message: string = args[1]!.toString();
        
        // The command must to be a reply to a message, because we fetch the target user based on this info.
        if (ctx.msg.reply_to_message == null) throw new Error('Reply to a message to use this feature!');
        
        if (typeof count !== 'number' || typeof message !== 'string'){
            throw new Error('Invalid Format!');
        }
        
        if(isNaN(count)){
            throw new Error('Invalid Format!');
        }
        
        const userName = ctx.msg.from?.first_name+" "+ctx.msg.from?.last_name;
        const userId: number = ctx.msg.reply_to_message?.from?.id!; //Null safety is being expected -> need to work.
        
        const triggeredUser: TriggeredUser = new TriggeredUser(userName,userId, count,message);
        // TODO: Save the user to a storage space. Probably a JSON file, or a DB.
        const data = JSON.stringify(triggeredUser);
        
        const botMessage = await ctx.reply(`Captured the Request`);

        // TODO: use the editMessageText option to notify of the trigger saved successfully.
        await bot.api.editMessageText(ctx.msg.chat.id, botMessage.message_id, `Request Details: \n ${data} `);
    } catch (error) {
        if (error instanceof Error)
            await ctx.reply(error.message);
    }
})