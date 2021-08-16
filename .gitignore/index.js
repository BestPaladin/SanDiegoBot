const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log("Le bot de SanDiego est allumé !");
  client.user.setActivity("GTA ONLINE RP PS4");
});

client.login(process.env.BOT_TOKEN);

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.")
  } else if (message.content.endsWith("quoi")) {
     message.channel.send("feur")  
  }
})
