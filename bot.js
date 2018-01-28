const Discord = require("discord.js");
const client = new Discord.Client();
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let prefix = "&";


client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "foo") {
    message.channel.send("bar!");
  }
  if (command === "build") {
    let klasa = args[0];
    if (klasa === warrior) {
    message.channel.send("Hey, &{message.author.username}, these are following builds for warrior:\nBannerslave Berserker: https://qtfy.eu/guildwars/warrior/bannerslave-berserker/ \nwubba lubba dub dub);
    }
  }
});

// THIS  MUST  BE  THIS  WAY, pls no touchy-touchy
client.login(process.env.BOT_TOKEN);
