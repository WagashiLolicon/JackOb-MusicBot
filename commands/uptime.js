const Discord = require('discord.js');
const moment = require("moment");
const format = require("moment-duration-format");
exports.run = (client, message, args) => {
  message.delete(message.author)
    message.channel.sendMessage('\u200B', {
        embed: {
            color: 1881571,
            title: `Informations : ${client.user.username}`,
            fields: [
                 {
                     name: `:alarm_clock: Uptime`,
                     value: `${moment.duration(client.uptime).format(" D [Jours], H [Heures], m [Minutes], s [Secondes]")}`,
                     inline: true
                 },
                 {
                     name: `MemoryUsage`,
                     value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB (MegaBites)`,
                     inline: true
                 },
                 {
                     name: `User`,
                     value: `Commmande executer par : ${message.author.username}`,
                     inline: true
                 },
              ],
              timestamp: new Date(),
              thumbnail: {
                  url: client.user.avatarURL
              }
          }
      }).then(response => { response.delete(15000) });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'Permet de voir le temps ecoulé depuis le démarrage du bot.',
  usage: 'uptime'
};
