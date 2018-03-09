const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  message.delete(message.author)
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Tu n'a pas la permission !");
let modlogs = client.channels.find('name', 'mod-logs');
if (!modlogs) return message.reply('Je n\'arrive pas a trouver le channel **#mod-logs**, si celui-ci n\'a pas encore été crée, veuillez le créer afin de pouvoir utiliser la commande.');
if (reason.length < 1) return message.reply('Vous devez ajouter une raison pour pouvoir utiliser le ban.');
if (message.mentions.users.size < 1) return message.reply('Veuillez mentionné quelqu\'un lorsque tu utilises cette commande.').catch(console.error);
if (!message.guild.member(user).bannable) return message.reply('Je ne peux pas bannir ce membre.');
message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('Utilisateur:', `${user.username}#${user.discriminator} (${user.id})`)
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
  name: 'ban',
  description: 'Permet de Bannir le joueur mentionné.',
  usage: 'ban <mention> <raison>'
};
