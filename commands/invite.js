const format = require("moment-duration-format");
const Discord = require('discord.js');
const moment = require("moment");
exports.run = (client, message, args) => {
  message.delete(message.author)
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .addField(':incoming_envelope: Invitation :', '\rhttps://goo.gl/np1uJo' )
        .addField(':star: Serveur Support :', '\rhttps://discord.gg/c2cAPF5' )
      return message.channel.sendEmbed(embed).then(response => { response.delete(15000) });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'invite',
description: 'Permet d\'inviter le Bot.',
usage: 'invite'
};
