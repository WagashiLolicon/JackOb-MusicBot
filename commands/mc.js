const mc = require('../mc.json');
const randomItem = require('random-item');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete(message.author)
    message.channel.sendMessage( {
            content: ``,
            embed: {
                color: 5890088,
                author: {
                    name: ``,
                    url: ``,
                    icon_url: ``
                },
                description: ``,
                image: {
                    url: `${randomItem(mc)}`
                }
            }
        }).then(response => { response.delete(15000) });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mc"],
  permLevel: 0
};

exports.help = {
  name: 'mc',
  description: 'Images de Paysage Minecraft.',
  usage: 'mc'
};
