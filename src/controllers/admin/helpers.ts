import { Composer } from "grammy";
import { bot } from "../../../bot";

export const helpers = new Composer();

helpers.command("start", async (ctx) =>{
    const args = ctx.match.split(" ");
    console.log(args.length);
    if(args[0] == " "){
        await bot.api.sendMessage(ctx.msg.chat.id, "No Args noticed");
    }
    console.log(ctx.match);
    if(ctx.from?.id == process.env.OWNER)
        await bot.api.sendMessage(ctx.msg.chat.id, "Hello, Creator!");
    else
        await bot.api.sendMessage(ctx.msg.chat.id, "Hello, Human!");
})
