const Discord = require("discord.js");
const client = new Discord.Client();
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

let prefix = "&";


client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

 if(command === 'ping') {
  message.channel.send('Pong!');
} else
if (command === 'blah') {
  message.channel.send('Meh.');
}
});

// THIS  MUST  BE  THIS  WAY, pls no touchy-touchy
client.login(process.env.BOT_TOKEN);
