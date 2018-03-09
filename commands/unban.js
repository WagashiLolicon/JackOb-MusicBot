exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  message.delete(message.author)
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Tu n'a pas la permission !");
let modlogs = client.channels.find('name', 'mod-logs');
if (!modlogs) return message.reply('Je n\'arrive pas a trouver le channel **#mod-logs**, si celui-ci n\'a pas encore été crée, veuillez le créer afin de pouvoir utiliser la commande.').then(response => { response.delete(60000) });
if (reason.length < 1) return message.reply('Vous devez ajouter une raison pour pouvoir utiliser le ban.').then(response => { response.delete(20000) });
if (message.mentions.users.size < 1) return message.reply('Veuillez mentionné quelqu\'un lorsque vous utilisez cette commande.').catch(console.error).then(response => { response.delete(20000) });
if (!message.guild.member(user).kickable) return message.reply('Je ne peux pas unban ce membre.').then(response => { response.delete(20000) });
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Permet d\'unban l\'utilisateur mentionné.',
  usage: 'unban <mention> <raison>'
};
