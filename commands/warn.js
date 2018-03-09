const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  message.delete(message.author)
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Tu n'a pas la permission !");
let modlogs = client.channels.find('name', 'mod-logs');
if (!modlogs) return message.reply('Je n\'arrive pas a trouver le channel **#mod-logs**, si celui-ci n\'a pas encore été crée, veuillez le créer afin de pouvoir utiliser la commande.').then(response => { response.delete(60000) });
if (reason.length < 1) return message.reply('Vous devez ajouter une raison pour pouvoir warn l\'utilisateur.').then(response => { response.delete(20000) });
if (message.mentions.users.size < 1) return message.reply('Veuillez mentionné quelqu\'un utiliser cette commande.').catch(console.error).then(response => { response.delete(20000) });
  if (!message.guild.member(user).kickable) return message.reply('Je ne peux pas warn ce membre, mon rôle est inférieure à celui de l\'utilisateur à warn.');
message.guild.member(user).kick();
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('Utilisateur:', `${user.username}#${user.discriminator}`)
  .addField('Modérateur:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Raison:', reason);
  return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Permet de warn la personne mentionnée.',
  usage: 'warn <mention> <raison>'
};
