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
        .setTitle("Réglement officiel des gangs")
        .setColor('#006eff')
        .setDescription("Tous les joueurs de la session s'engagent à avoir lu ce réglement.")
        .setFooter("Merci de valider ci-dessous le réglement.")
        .addField('Chaque gang doit être formé de 1 à 4 personnes selon les rôles suivants :', '- 1 chef de gang\n- 1 bras droit\n- 2 sous-fifres')
        .addField('Lors de la mort RP, le chef de gang ou son bras droit ne doit pas reprendre le même grade.', '\u200b')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_gangrules)
      break;
    case 'sd!regles-braquage':
      const embed_braquagerules = new Discord.RichEmbed()
        .setTitle("Réglement officiel des braquages")
        .setColor('#006eff')
        .setDescription("Tous les joueurs de la session s'engagent à avoir lu ce réglement.")
        .setFooter("Merci de valider ci-dessous le réglement.")
        .addField(':no_entry: Interdictions', '- Il est interdit de braquer quelqu’un dans les zones peuplées de la ville et dans les zones safes (parking central, hôpital, etc…).\n- Il est interdit de braquer/kidnapper un policier ou autre dans des zones safes.\n- Tous raid du commissariat est interdit, pensez au MASS RP.\n- Vous ne pouvez pas prendre en otage un membre de votre groupe, gang ou organisation.\n- Il est interdit de forcer une personne à donner l’argent de sa banque, ainsi que la forcer à vous vendre ou donner son véhicule.\n- Il est possible après vol de véhicule de demander une rançon mais attention le prix doit être cohérent avec le véhicule.\n- Chaque joueur est limité à 1 braquage par session.')
        .addField(':moneybag: Braquage d\'ATM', '- 5 min devant\n- 1 000$ à 5 000$\n- 1 ou 2 braqueurs avec pied de biche\n- 1 ou 2 policiers')
        .addField(':shopping_cart: Braquage de supérette', '- 10 min dedans\n- 10 000$ à 50 000$\n- 2 ou 3 braqueurs\n- 2 ou 3 policiers')
        .addField(':ring: Braquage de bijouterie', '- 45 min dedans\n- 500 000$ à 1 000 000$\n- 3 ou 4 braqueurs avec marteau\n- Minimum 6 policiers')
        .addField(':bank: Braquage de pacifique', '- 45 min dedans\n- 3 000 000$ à 5 000 000$\n- 3 ou 4 braqueurs\n- Minimum 6 policiers')
        .addField(':gun: Prise d\'otages', '- Rançons maximum : 15 000$ par tête\n- Minimum 4 policiers')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_braquagerules)
      break;
    case 'sd!notions':
      const embed_notions = new Discord.RichEmbed()
        .setTitle("Liste des notions RP à connaitre")
        .setColor('#006eff')
        .setDescription("Tous les joueurs de la session s'engagent à connaitre les notions en RP.")
        .addField('HRP Vocal', 'Cela veut dire que la discussion viens du joueur et non du personnage joué.')
        .addField('RP ou ROLEPLAY', 'Jouer un rôle de la vie dans un jeu.')
        .addField('NO FEAR RP', 'N\'avoir aucune crainte face à une arme.')
        .addField('FREEKILL', 'Tuer un joueur sans raison.')
        .addField('CARKILL', 'Tuer un joueur sans raison avec une voiture.')
        .addField('METAGAMING', 'Avoir des informations HRP et les réutiliser en RP.')
        .addField('POWERGAMING', 'Faire des choses irréalisables de la vie dans le RP.')
        .addField('MIXE', 'Mélanger le RP avec le HRP.')
        .addField('REVENGEKILL', 'Revenir sur une scène où on a été tué pour se venger et tuer notre meurtrier.')
        .addField('BUNNYHOPPING', 'Sauter et courir en même temps pour aller plus vite.')
        .addField('FORCING RP', 'Forcer quelqu\'un à faire un acte alors que plusieurs autres possibilités sont à sa disposition.')
        .addField('FREEPUNCH', 'Se permettre de frapper quelqu’un sans aucune raison valable.')
        .addField('MASS RP', 'Quand un session comporte pas 30 mais 5 millions de joueurs.')
        .addField('PAIN RP', 'Le fait que votre personnage ressente la douleur.')
        .addField('CHICKEN RUN', 'Le fait de courir dans tous les sens afin d\'esquiver les tirs d\'arme à feu.')
        .addField('DRIVE BY', 'Consiste à tirer par la fenêtre de sa voiture.')
        .addField('COHERENCE RP', 'Votre personnage a des origines, un âge, une appartenance, un background et une évolution. Il vous est donc obligatoire de le respecter et de vous y tenir.')
        .addField('RACCOURCI RP', 'Tirer des conclusions hâtives avec peu d\'informations sans avoir de preuve RP. (Exemple : "C\'est une voiture jaune, donc c\'est un véhicule des Vagos !"')
        .addField('WIN RP', 'Le Win-Rp est le fait de vouloir absolument gagner jusqu\'aller à l\'encontre du rp.')
        .addField('FAIRPLAY', 'Accepter la défaite pour que tous le monde puissent s\'amuser , il ne faut pas oublier que c\'est un jeu et que nous somme là pour ca !')
        .addField('STREAMHACK', 'Consiste à prendre des informations RP via le live d\'un joueur.')
        .setThumbnail("https://cdn.discordapp.com/icons/876435753121488906/c3795293709c2238efe5fb7d14c3544d.png");
      message.channel.send(embed_notions)
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
        .addField('sd!regles-braquage', 'Affiche le réglement des braquages.')
        .addField('sd!notions', 'Affiche la liste des notions RP à connaitre.')
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
