const format = require("moment-duration-format");
const Discord = require('discord.js');
const moment = require("moment");
exports.run = (client, message, args) => {
  message.delete(message.author)
      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .addField(':clock1: Heures :', moment().format('LT') )
        .addField(':date: Date :', moment().subtract(10, 'days').calendar() )
      return message.channel.sendEmbed(embed).then(response => { response.delete(15000) });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'time',
description: 'Permet de voir l\'heure.',
usage: 'time'
};
