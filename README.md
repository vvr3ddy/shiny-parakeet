# Shiny Parakeet

---
A [grammY](https://grammy.dev/) based telegram bot to reply to people at every _'X'_ messages.

## How to deploy?

### 1. Clone the repository

```bash
git clone https://github.com/WolfOSP/shiny-parakeet.git
```

### 2. Install the dependencies

```bash
cd shiny-parakeet
npm install
```

### 3. Edit enviroment variables

* Create a `.env` file or export as environment variables:

    - `BOT_API_KEY`: Obtained from @BotFather on telegram.
    - `ENV`: 'test' | 'dev' | 'prod': any of these as per requirements
    - `OWNER`: USER_ID of the owner of the bot.

### 4. Run the bot

#### 4.1 Compile the typescript files

```bash
npx tsc
```

#### 4.2 Run the bot

```bash
node bot.js
```

## Dependencies:

* dotenv: 16.0.1
* grammy: 1.9.1
* pg: 8.7.3
* nodemon: 2.0.19
* reflect-metadata: 0.1.13
* typeorm: 0.3.7
