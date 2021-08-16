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
      .setColor('#006eff')
      .setDescription("Lors de la navigation dans l'enceinte du serveur, le joueur s'engage à avoir lu ce réglement.")
      .setFooter("Merci de valider ci-dessous le réglement.")
      .addField(':no_entry: De spams', '\u200b')
      .addField(':no_entry: De donner des informations personnelles', '\u200b')
      .addField(':no_entry: De faire du forcing IRL', '\u200b')
      .addField(':no_entry: D\'insulter', '\u200b')
      .addField(':no_entry: De pub pour d\'autres serveurs', '\u200b')
      .addField(':no_entry: De manquer de respect', '\u200b')
      .addField(':no_entry: Racisme même en blague', '\u200b')
      .addField(':no_entry: D\'avoir un pseudo insultant', '\u200b')
      .addField(':no_entry: D\'avoir un pseudo similaire à un staff', '\u200b')
      .addField(':no_entry: D\'avoir un pseudo similaire à une personne connue IRL', '\u200b')
      .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
    message.channel.send({embed})
  }
})

client.on('guildMemberAdd', member => {
    const embed = new Discord.RichEmbed()
      .setTitle('Bienvenue à l\'aéroport de San Diego City, ' + member.user.username + ' !')
      .setColor('#006eff')
      .setThumbnail(member.user.avatarURL);
    member.guild.channels.get('876654952360054826').send({embed}); 
});
