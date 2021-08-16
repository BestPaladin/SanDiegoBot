const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("Le bot de SanDiego est allumé !");
  client.user.setActivity("GTA ONLINE RP PS4");
});

client.on('message', function (message) {
  if (message.content == "!règles") {
  	message.delete();
    const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Règlement officiel du discord')
    	.setDescription('Lors de la navigation dans l\'enceinte du serveur, le joueur s\'engage à avoir lu ce réglement.')
        .setThumbnail('https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png')
	.addField('1', ':no-entry: De spams')
	.addField('2', ':no-entry: De donner des informations personnelles', ' ')
	.addField('3', ':no-entry: De faire du forcing IRL', ' ')
	.addField('4', ':no-entry: D\'insulter', ' ')
	.addField('5', ':no-entry: De pub pour d\'autres serveurs', ' ')
	.addField('6', ':no-entry: De manquer de respect', ' ')
	.addField('7', ':no-entry: Racisme même en blague', ' ')
	.addField('8', ':no-entry: D\'avoir un pseudo insultant ', ' ')
	.addField('9', ':no-entry: D\'avoir un pseudo similaire à un staff', ' ')
	.addField('10', ':no-entry: D\'avoir un pseudo similaire à une personne connue IRL', ' ')
        .setFooter('Merci de valider ci-dessous le réglement.');
    message.channel.send(embed);
  }
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivés');
  if (!channel) return;
  const embed = new Discord.MessageEmbed()
    	.setColor('0xff0000')
    	.setTitle('Bienvenue à l\'aéroport de San Diego City, ' + member.user.username + ' !')
		.setThumbnail(member.user.avatarURL);
  channel.send(embed)
  const role = member.guild.roles.cache.find(rol => rol.name === 'Joueurs');
  member.roles.add(role);
});
