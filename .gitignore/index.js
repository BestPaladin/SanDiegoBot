const Discord = require('discord.js');
const client = new Discord.Client();
var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.API_KEY}).base('appztkTlB3909ohOS');

client.once('ready', () => {
  console.log("Le bot de SanDiego est allumé !");
  client.user.setActivity("GTA ONLINE RP PS4");
});

client.login(process.env.BOT_TOKEN);

client.on("message", message => {
  if(message.content.startsWith('sd!')) console.log("L'utilisateur " + message.author.username + " a executé la commande " + message.content + ".");
  
  switch(message.content) {
    case 'sd!ping':
      message.channel.send("Pong ! :ping_pong:");
      break;
    case 'sd!regles':
      const embed_rules = new Discord.RichEmbed()
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
      message.channel.send(embed_rules)
      break;
    case 'sd!help': 
      const embed_help = new Discord.RichEmbed()
        .setTitle("Page d'aide | Bot privé SanDiego")
        .setColor('#006eff')
        .addField('sd!help', 'Affiche la page d\'aide du bot.')
        .addField('sd!ping', 'Vérifie l\'état du bot.')
        .addField('sd!regles', 'Affiche le réglement du serveur discord.')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_help)
      break;
    case 'sd!create':
      base('Table 1').create([
      {
       "fields": {
         "Id": message.author.id,
         "name": null,
         "age": null
       }
      }
      ], function(err, records) { if (err) { console.error(err); return; } records.forEach(function (record) { console.log(record.getId()); });  });
    default:
      break;
  }
});

client.on("guildMemberAdd", member => {
  console.log(member.user.username + " a rejoins le serveur !");
  let bvn = client.channels.get(process.env.JOIN_CHANNEL);
  var embed_join = new Discord.RichEmbed()
      .setColor('#006eff')
      .setTitle('Bienvenue à l\'aéroport de San Diego City, ' + member.user.username + ' !')
      .setDescription('Soyez le bienvenue sur le serveur discord de SanDiegoCity !\nAvant de commencer l\'aventure, merci de valider le <#877117299562270800> et de répondre à mes questions !')
      .setThumbnail(member.user.avatarURL);
  bvn.send(embed_join);
  member.user.send("Salut ! Avant d'entrer dans le serveur, tu dois répondre à plusieurs questions :smile: !");
});


client.on("guildMemberRemove", member => {
  console.log(member.user.username + " a quitté le serveur !");
  let bvn = client.channels.get(process.env.LEAVE_CHANNEL);
  var embed_leave = new Discord.RichEmbed()
      .setColor('#006eff')
      .setTitle('En espérant que tu as passé une bonne aventure ' + member.user.username + ' !')
      .setThumbnail(member.user.avatarURL);
  bvn.send(embed_leave);
});
