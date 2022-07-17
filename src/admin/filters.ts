import { Composer } from "grammy";
import { bot } from "../../bot";

export const filters = new Composer();

filters.command("trigger", async (ctx) => {
    try {
        const args = ctx.match.split(" ");
        if (args[0] === "") throw new Error('No args passed!');
        /*
        * The format for valid input would be a reply to a message with 
        * /trigger <count> <message>
        * where 
        *       count = no of messages after which the bot responds
        *       message = message which the bot replies to the user
        */  
        bot.api.sendMessage(ctx.msg.chat.id, args.toString());
        if(ctx.msg.reply_to_message==null) throw new Error('Reply to a message to use this feature!');
        ctx.reply(`Message sending fukkr is: ${ctx.msg.reply_to_message?.from?.id}, who's basically ${ctx.msg.reply_to_message.from?.first_name} ${ctx.msg.reply_to_message.from?.last_name}`);
    } catch (error) {
        if (error instanceof Error)
            await ctx.reply(error.message);
    }
})