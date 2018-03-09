const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.channel.sendFile('./Image/Coins/'+Math.floor((Math.random()*(3-1))+1)+'.png').then(response => { response.delete(15000) });//va te choisir  des chiffre en random que tu multiplis par 24 wtf
  message.delete(message.author)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "coins",
  description: 'Permet de faire un Pile ou Face.',
  usage: "coins"
};
