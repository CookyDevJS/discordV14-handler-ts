import { Client } from "discord.js";
import { BotEvent } from "../types";
import { color } from "../functions";

const event: BotEvent = {
  enable: true,
  name: "ready",
  once: true,
  execute: (client: Client) => {
    console.log(
      color('mainColor', `[🤖] Logged in as ${color('secColor', `${client.user?.tag}(${client.user?.id})`)} Made With ! Cooky.#2312 💖`)
    );
  },
};

export default event;
