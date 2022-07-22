require('dotenv').config();

import { Bot } from "grammy";
import { helpers } from "./src/controllers/admin/helpers";
import { filters } from "./src/controllers/modules/filters"
import "reflect-metadata"
import { BotDataSource } from "./src/repositories/dataSourceConfig";

// Fetch the bot api key from env vars
let BOT_API_KEY = process.env["BOT_API_KEY"];
export const bot = new Bot(BOT_API_KEY);

// expose the context for usage in datastore
bot.command("register",async (ctx)=>{
    const groupName = ctx.message?.chat.id;
    
    BotDataSource.initialize()
    .then(()=>{
        console.log(`Data Source has been initialized for ${groupName}!`);
        // Register the group in the database.
        
        ctx.reply("Successfully registered the group. You can now make use of the bot features!");
    })
    .catch(async (err)=>{
        console.error("Error during Data source Initialization", err);
        ctx.reply(`Registering failed with the message:\n${err.message}`);
    })

});


// Load the modules being used for the bot functionality.
bot.use(helpers);
bot.use(filters);

// Lets use long-polling for now.
bot.start();
