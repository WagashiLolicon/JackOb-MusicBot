const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
        message.delete(message.author)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Tu n'a pas la permission !");
    let modlogs = client.channels.find('name', 'mod-logs');
    if (!modlogs) return message.reply('Je n\'arrive pas a trouver le channel **#mod-logs**, si celui-ci n\'a pas encore été crée, veuillez le créer afin de pouvoir utiliser la commande.');
    if (message.mentions.users.size < 1) return message.reply('Veuillez mentionné quelqu\'un lorsque vous utilisez cette commande.').catch(console.error);
    if (reason.length < 1) return message.reply('Vous devez ajouter une raison pour pouvoir kick l\'utilisateur.');
  if (!message.guild.member(user).kickable) return message.reply('Je ne peux pas kick ce membre, mon rôle est inférieure a celui de l\'utilisateur a kick.');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', '**Kick**')
    .addField('**Utilisateur:**', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('**Modérateur:**', `${message.author.username}#${message.author.discriminator}`)
    .addField('**Raison**', reason);
  return client.channels.get(modlogs.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Permet de kick le joueur mentionné.',
  usage: 'kick <mention> <raison>'
};
