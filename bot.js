const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const config = require("./config.json");

client.on("message", (message) => {
  
  if(message.author.id !== config.ownerID) return; // Exit and stop if some else than ME tries to run a bot ;)
  
  if (!message.content.startsWith(config.prefix) || message.author.bot) return; // Exit and stop if the prefix is not there or if user is a bot

  if(message.content.startsWith(config.prefix + "prefix")) {
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;

  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}
   
  if (message.content.startsWith(config.prefix + "ping")) { //Answer to a 'ping' command
    message.channel.send("pong! muthafucker");
  } else
  if (message.content.startsWith(config.prefix + "foo")) { //Answer to a 'foo' command
    message.channel.send("bar!");
  } else
  if (message.content.startsWith(config.prefix + "custombuild")) {
    message.channel.reply("you incompetent, useless shit. Go get some proper build first!")
  }
});

// THIS  MUST  BE  THIS  WAY, pls no touchy-touchy
client.login(process.env.BOT_TOKEN);