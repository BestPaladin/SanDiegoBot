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
    case 'sd!regles-ville':
      const embed_cityrules = new Discord.RichEmbed()
        .setTitle("Réglement de San Diego City")
        .setColor('#006eff')
        .setDescription("Tous les joueurs de la session s'engagent à avoir lu ce réglement.")
        .setFooter("Merci de valider ci-dessous le réglement.")
        .addField(':pencil: REGLE 1 :', 'Merci de désactiver la carte lorsque vous rejoignez la session.')
        .addField(':pencil: REGLE 2 :', 'Si vous n\'avez pas acheté d\'armes à l\'armurier de la ville et que vous ne possedez pas d\'arme illégale, vous ne pouvez pas braquer sinon cela devient du give.')
        .addField(':pencil: REGLE 3 :', 'Laissez les scènes rp se produire, ne chercher pas les joueurs simplement pour vous occupez !')
        .addField(':pencil: REGLE 4 :', 'Quand vous faites un accident ne repartez pas l\'air de rien. Appelez un dépaneur et si il faut, une ambulance.')
        .addField(':pencil: REGLE 5 :', 'La réparation de véhicule se fait par un mécano.')
        .addField(':pencil: REGLE 6 :', 'Quand une patrouille de gendarmerie ou police vous contrôle, ne faites pas le bandit à vous échappez tout le temps, arrêtez vous sur le coté et coopérez.')
        .addField(':pencil: REGLE 7 :', 'Quand votre personnage recoit une balle, merci d\'appuyez sur L3 pour montrer que vous êtes blaissé (même en course poursuite).')
        .addField(':pencil: REGLE 8 :', 'Vous devez au moins acheter un panier repas et faire le plein d\'essence en début de session sous peine de mourir de faim et de ne plus avoir d\'essence.')
        .addField(':pencil: REGLE 9 :', 'En RP, si vous assistez à une scène ou un acte totalement interdit ou parlez en HRP, n\'en parler pas en session mais sur le discord à un admin. Le mot HRP en session n\'est pas apprécié par certains joueur !')
        .addField(':pencil: REGLE 10 :', 'L\'attaque sur personne connue ou riche est interdite si il n\'y a pas d\'officier de police en ville.')
        .addField(':pencil: REGLE 11 :', 'Un panier repas doit être acheté obligatoirement lors de chaque session au moment desiré :panier repas 500$')
        .addField(':pencil: REGLE 12 :', 'Si vous voter présent alors que vous n\'êtes pas là vers le commencement de la session vous recevrez un warn , si récidive vous serez privé de session pour une durée indéterminée.')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_cityrules)
      break;
    case 'sd!regles-police':
      const embed_policerules = new Discord.RichEmbed()
        .setTitle("Réglement de la police")
        .setColor('#006eff')
        .setDescription("Tous les joueurs de la session s'engagent à avoir lu ce réglement.")
        .setFooter("Merci de valider ci-dessous le réglement.")
        .addField(':man_police_officer: REGLE 1 :', 'Vous ne pouvez conduire qu\'un seul véhicule de fonction et vous devrez toujours être accompagner d\'un coéquipier ou deux en cas de personne dangereuse.')
        .addField(':man_police_officer: REGLE 2 :', 'Les recrues ne doivent jamais être laissées seules : il faudra toujours quelqu\'un de plus hauts gradés en leurs compagnie.')
        .addField(':man_police_officer: REGLE 3 :', 'En fonction, aucune mort RP ne vous sera mis (uniquement des comas). En civil par contre, vous pouvez mourrir en RP.')
        .addField(':man_police_officer: REGLE 4 :', 'Si vous restez toujours en fonction, vous devrez alors prendre rdv chez un EMS pour des tests psychologiques : ils pourront vous mettre une mort RP en cas d\'abus.')
        .addField(':man_police_officer: REGLE 5 :', 'Vous devez toujours respecter les hiérarchies au sein de la police. Si vous voulez monter en grade, il vous faudra effectuer une formation a l\'armée ainsi qu\'un accord du chef de la police. ')
        .addField(':man_police_officer: REGLE 6 :', 'Pour un simple contrôle, il est interdit de venir à plus de 3 véhicules. Il est aussi interdit de sortir une arme (même pour tirer des balles en caoutchouc) pour aucune raison valable.')
        .addField(':man_police_officer: REGLE 7 :', 'N\'étant pas sous régime autoritaire, vous vous devez de citer ses droits à la personne arrêtée.')
        .addField(':man_police_officer: REGLE 8 :', 'Pour chaque policier, il vous faudra un accord du chef de la police pour obtenir le PPA léger. Les recrues ne pourront mettre que des PV et ne pourront pas intervenir lors d\'interventions musclées.')
        .addField(':man_police_officer: REGLE 9 :', 'Seul les haut gradés pourront avoir un PPA lourd.')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_policerules)
      break;
    case 'sd!regles-gang':
      const embed_gangrules = new Discord.RichEmbed()
        .setTitle("Réglement officiel du serveur discord")
        .setColor('#006eff')
        .setDescription("Lors de la navigation dans l'enceinte du serveur, le joueur s'engage à avoir lu ce réglement.")
        .setFooter("Merci de valider ci-dessous le réglement.")
        .addField('Chaque gang doit être formé de 1 à 4 personnes selon les rôles suivants :', '- 1 chef de gang\n- 1 bras droit\n- 2 sous-fifres')
        .addField('Lors de la mort RP, le chef de gang ou son bras droit ne doit pas reprendre le même grade.', '\u200b')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_gangrules)
      break;
    case 'sd!help': 
      const embed_help = new Discord.RichEmbed()
        .setTitle("Page d'aide | Bot privé SanDiego")
        .setColor('#006eff')
        .addField('sd!help', 'Affiche la page d\'aide du bot.')
        .addField('sd!ping', 'Vérifie l\'état du bot.')
        .addField('sd!regles', 'Affiche le réglement du serveur discord.')
        .addField('sd!regles-ville', 'Affiche le réglement de San Diego City.')
        .addField('sd!regles-police', 'Affiche le réglement de la police.')
        .addField('sd!regles-gang', 'Affiche le réglement des gangs.')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_help)
      break;
    case 'sd!create':
      base('Table 1').create([{
        "fields": {
           "Id": parseInt(message.author.id),
           "state": 1
        }
      }], function(err, records) { if (err) { console.error(err); return; } records.forEach(function (record) { console.log(record.getId()); });  });
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
      .setDescription('Soyez le bienvenue sur le serveur discord de SanDiegoCity !\nAvant de commencer l\'aventure, merci de valider le <#877117299562270800> et de faire ta candidature RP !')
      .setThumbnail(member.user.avatarURL);
  bvn.send(embed_join);
});


client.on("guildMemberRemove", member => {
  console.log(member.user.username + " a quitté le serveur !");
  let bvn = client.channels.get(process.env.LEAVE_CHANNEL);
  var embed_leave = new Discord.RichEmbed()
      .setColor('#006eff')
      .setTitle('En espérant que tu as passé une bonne aventure ' + member.user.username + ' !')
      .setDescription('Merci d\'être passé !')
      .setThumbnail(member.user.avatarURL);
  bvn.send(embed_leave);
});

/*client.on("messageReactionAdd", (reaction, member) => {
  
  
  switch(reaction.message.id) {
    case process.env.RULES_MSG:
      console.log(member.user.username + " a validé le réglement du serveur.");
      break;
    default:
      console.log(member.user.username + " a réagit au message n°" + reaction.message.id + " !");
      break;
  }
});*/
