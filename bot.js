const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; //Exit and stop if prefix is not there or, the author of this message is a bot
    
    if (message.content.startsWith(prefix + "ping") {
    	message.channel.send("pong!");
  	}
    if (message.content.startsWith(prefix+ "Sigis") {
        message.channel.send("is a tryhard");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
