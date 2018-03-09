const Discord = require('discord.js');
const moment = require("moment");
const format = require("moment-duration-format");
exports.run = (client, message, args) => {
  message.delete(message.author)
    message.channel.sendMessage('\u200B', {
        embed: {
            color: 1881571,
            title: `Information on the bot discord ${client.user.username}`,
            fields: [
{
    name: `Servers`,
    value: `${client.guilds.size.toLocaleString()}`,
    inline: true
},
{
    name: `Total Players`,
    value: `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
    inline: true
},
{
    name: `Total Channels`,
    value: `${client.channels.size.toLocaleString()}`,
    inline: true
},
{
    name: `Version Of Discord.js`,
    value: `v${Discord.version}`,
    inline: true
}
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
name: 'infobot',
description: 'Permet de voir les statistiques du Bot.',
usage: 'infobot'
};
