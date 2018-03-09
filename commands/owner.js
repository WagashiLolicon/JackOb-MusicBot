exports.run = (client, message, args) => {
  const msg = message
  msg.delete(message.author)
msg.channel.sendMessage(`Hey ${message.author.username} ! ${message.guild.owner} est l'owner de ce serveur`).then(response => { response.delete(10000) });

  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'owner',
    description: 'Permet de voir qui est le propriétaire du Server.',
    usage: '!owner'
  };
