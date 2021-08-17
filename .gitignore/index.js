const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs')

client.once('ready', () => {
  console.log("Le bot de SanDiego est allumé !");
  client.user.setActivity("GTA ONLINE RP PS4");
});

client.login(process.env.BOT_TOKEN);

client.on("message", message => {
  switch(message.content) {
    case 'sd!ping':
      message.channel.send("Pong.");
      break;
    case 'sd!regles':
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
      break;
    case 'db!create': 
      var username = 'example'
      message.channel.send("ok");
//       var json = 'username' + username;
//       fs.writeFile("users/BestPaladin.json", JSON.stringify(json));
      
      fs.readFile('users/BestPaladin.json', function (err, data) {
         var json = JSON.parse(data);
         json.push('username: ' + username);
         fs.writeFile("users/BestPaladin.json", JSON.stringify(json));
      });
      break;
    default:
      break;
  }
});

client.on("guildMemberAdd", member => {

  console.log(member.user.username + " a rejoins le serveur !");
  let bvn = client.channels.get('876654952360054826');

  var emb = new Discord.RichEmbed()
      .setColor('#006eff')
      .setTitle('Bienvenue à l\'aéroport de San Diego City, ' + member.user.username + ' !');
  
  if (member.user.avatarURL !== 'undefined') { emb.setThumbnail(member.user.avatarURL); }
  else { emb.setThumbnail('https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png'); }
  
  bvn.send(emb);

});
