const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log("Le bot de SanDiego est allumé !");
  client.user.setActivity("GTA ONLINE RP PS4");
});

client.login(process.env.BOT_TOKEN);

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.");
  } else if (message.content.endsWith("quoi")) {
     message.channel.send("feur");
  } else if (message.content === "!regles") {
    message.delete();
    
    const embed = new Discord.RichEmbed()
      .setTitle("Réglement officiel du serveur discord")
      .setColor('0xff0000')
      .setDescription("Lors de la navigation dans l'enceinte du serveur, le joueur s'engage à avoir lu ce réglement.")
      .setFooter("Merci de valider ci-dessous le réglement.")
      .addField('1', ':no-entry: De spams')
	    .addField('2', ':no_entry: De donner des informations personnelles')
	    .addField('3', ':no_entry: De faire du forcing IRL')
	    .addField('4', ':no_entry: D\'insulter')
	    .addField('5', ':no_entry: De pub pour d\'autres serveurs')
	    .addField('6', ':no_entry: De manquer de respect')
	    .addField('7', ':no_entry: Racisme même en blague')
	    .addField('8', ':no_entry: D\'avoir un pseudo insultant')
	    .addField('9', ':no_entry: D\'avoir un pseudo similaire à un staff')
      .addField('10', ':no_entry: D\'avoir un pseudo similaire à une personne connue IRL')
      .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
    message.channel.send({embed})
  }
})
