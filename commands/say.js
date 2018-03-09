exports.run = (client, message, args) => {
var say = message.content.substr(6);
return message.reply(say);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Permet de faire répeter une phrase.',
  usage: 'say'
};
