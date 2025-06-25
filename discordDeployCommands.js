import { REST, Routes } from "discord.js";
import discordAPI from "./discordAPI.js";
import "dotenv/config";

let commands = [];
discordAPI.commands.forEach((value, key) => {
  commands.push(value.data);
});

const rest = new REST().setToken(process.env.discord_token);

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.discord_client_id,
        process.env.discord_guild_id
      ),
      { body: commands }
    );
    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (err) {
    console.error(err);
  }
})();
