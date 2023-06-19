<h1 style="text-align:center;">Discord.js Handler TypeScript Template</h1>

This is a template for a Discord bot v14 handler using TypeScript. It is a starting point for building a bot that supports prefix commands and slash commands. Offering a strongly-typed, object-oriented approach to building the bot. Whether you're new to Discord bot development or looking to switch to TypeScript, this repository is a great starting point.

> **You can help with join this server [Clic Here](https://redes.srcooky.tk)**

## Features

* 🔥 Slash commands (supports auto complete!)
* ✉️ Prefix commands (Multi Server)
* 🕛 Cooldowns
* ❌ Enable | Disable Commands
* 🔧 Events and Command handlers
* 🍀 MongoDB Support

## Installation

**1.** Clone the repository:
```bash
git clone https://github.com/CookyDevJS/discordV14-handler-ts
```
**2.** Install the necessary dependencies by running the command `npm install`.

**3.** Change the file named `.env.example` to `.env`

```env
# BOT TOKEN
TOKEN=

# WebHook For join & leave servers
joinLeaveWebhook=

# GLOBAL PREFIX
PREFIX=-

#BOT ID
CLIENT_ID=

# MONGO URL (EJ: mongodb+srv://useradmin:password@cooky.9666.mongodb.net)
MONGO_URI=
# NAME OF YOU DATABASE (Can Create)
MONGO_DATABASE_NAME=
```
**4.** Compile the TypeScript code: Run `npx tsc` (or what you use for Build the project using the typescript module) to compile the TypeScript code into JavaScript.

**5.** start the bot using the `npm start` command