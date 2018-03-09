const Discord = require("discord.js");
exports.run = (client, message, args) => {

client.guilds.map(g => {
  message.delete(message.author)
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("15f153")
    .setThumbnail(sicon)
    .setFooter(`Jack\'Ob ⌑ ${Date.now}`)
    .addField(":confetti_ball: Jack'Ob fêtes sont retour ! :confetti_ball:", `A l'occasion du retour de Jack'Ob, je vous invites sur le Server Discord du Support de Jack'Ob pour que nous fêtons cela autour d'un petit event fraichement organisé par **Yendors**(Animateur du Serveur)`)
    .addField(`:inbox_tray: Voici l'invitation`, `https://discord.gg/c2cAPF5`)
   g.channels.filter(c => (c.type === 'text')).first().send(serverembed)
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sendMessageAllGuilds',
  description: 'Permet d\'envoyer un message dans toutes les guilds.',
  usage: 'sendMessageAllGuilds'
};
