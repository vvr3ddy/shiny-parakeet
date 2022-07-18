import { DataSource } from "typeorm";
import { bot } from "../../bot";

export const BotDataSource = new DataSource({
    type: "postgres",
    host: process.env["DBHOST"],
    port: process.env["DB_PORT"] || 5432,
    username: process.env["DB_USERNAME"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_NAME"],
})

BotDataSource.initialize()
    .then(()=>{
        console.log("Data Source has been initialized!")
    })
    .catch(async (err)=>{
        console.error("Error during Data source Initialization", err);
    })
