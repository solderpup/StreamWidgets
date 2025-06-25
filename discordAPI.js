import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  MessageFlags,
  SlashCommandBuilder,
} from "discord.js";
import {
  joinVoiceChannel,
  VoiceConnectionStatus,
  getVoiceConnection,
} from "@discordjs/voice";
import "dotenv/config";

const discordAPI = {
  client: null,
  commands: new Collection(),
};

discordAPI.commands
  .set("connect", {
    data: new SlashCommandBuilder()
      .setName("connect")
      .setDescription("connect to the reactive-chat voice channel"),
    execute: async (interaction) => {
      await interaction.reply("connecting...");
      let channel = await interaction.guild.channels.fetch(
        process.env.discord_channel_id
      );
      let connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
      });

      connection.on(VoiceConnectionStatus.Ready, (oldState, newState) => {
        console.log(
          "Discord app connected to voice and is in the Ready state!"
        );
      });

      /* TO DO Reconnect automatically
      connection.on(
        VoiceConnectionStatus.Disconnected,
        (oldState, newState) => {
          console.log(
            "Discord app disconnected from voice, attempting to reconnect."
          );
          joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdaptorCreator,
          });
        }
      ); */
    },
  })
  .set("disconnect", {
    data: new SlashCommandBuilder()
      .setName("disconnect")
      .setDescription("disconnect from the reactive-chat voice channel"),
    execute: async (interaction) => {
      await interaction.reply("disconnecting...");
      let connection = await getVoiceConnection(process.env.discord_guild_id);
      connection.destroy();
    },
  })
  .set("ping", {
    data: new SlashCommandBuilder().setName("ping").setDescription("pong?"),
    execute: async (interaction) => {
      await interaction.reply("pong!");
    },
  });

discordAPI.connect = () => {
  discordAPI.client = new Client({ intents: [GatewayIntentBits.Guilds] });

  discordAPI.client.once(Events.ClientReady, (readyClient) => {
    console.log(`Logged in to discord API as ${readyClient.user.tag}`);
  });

  discordAPI.client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = discordAPI.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
  });

  discordAPI.client.login(process.env.discord_token);
};

export default discordAPI;
