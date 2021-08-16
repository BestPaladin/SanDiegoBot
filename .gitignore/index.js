const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
   console.log('SanDiegoBot est allumé !');
});

client.login(process.env.BOT_TOKEN);

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.")
  }
})
