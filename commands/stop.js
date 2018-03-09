exports.run = (client, message, args) => {
    message.delete(message.author)
    return message.channel.sendMessage(`Arret du bot en cours . . .`).then(response => { client.destroy(20000)});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'stop',
  description: 'Permet d\'aretter le Bot.',
  usage: 'stop'
};
