const Discord = require('discord.js');
exports.run = (client, message, args) => {
client.user.setUsername(message.content.substr(9));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setname',
  description: 'Permet de changer le nom du bot.',
  usage: 'setname <name>'
};
