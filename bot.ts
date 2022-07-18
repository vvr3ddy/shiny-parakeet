require('dotenv').config();

import { Bot } from "grammy";
import { helpers } from "./src/controllers/admin/helpers";
import { filters } from "./src/controllers/modules/filters"

// Fetch the bot api key from env vars
let BOT_API_KEY = process.env["BOT_API_KEY"];
export const bot = new Bot(BOT_API_KEY);

// Load the modules being used for the bot functionality.
bot.use(helpers);
bot.use(filters);

// Lets use long-polling for now.
bot.start();
