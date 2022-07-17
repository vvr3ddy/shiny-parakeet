import { Composer } from "grammy";
import { bot } from "../../bot";

export const dummy = new Composer();

dummy.command("message", async (ctx) =>{
    const txt = ctx.msg;
    const chatid = ctx.msg.chat.id;
    console.log(txt);
    if(txt.from?.id == process.env.OWNER){
        bot.api.sendMessage(chatid, "Hello Boss")
    }else{
        bot.api.sendMessage(chatid, "Hello!")
    }
});