const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.delete(message.author)
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setThumbnail(sicon)
    .setFooter(`Jack'Ob`)
    .setColor("15f153")
    .addField("Nom du Serveur :", message.guild.name)
    .addField("Crée le :", message.guild.createdAt)
    .addField("Membres :", message.guild.members.filter(mb => mb.user.bot === false).size)
    .addField("Region", message.guild.region)
    .addField("ID", message.guild.id)
    .addField("Owner", message.guild.owner.user.username + "#" + message.guild.owner.user.discriminator)
    .addField("Text Channels", message.guild.channels.findAll("type", "text").length)
    .addField("Voice Channels", message.guild.channels.findAll("type", "voice").length)
    .addField("Roles", message.guild.roles.size)
    .addField("Emojis", message.guild.emojis.size)
    .addField("Tu l'a rejoin le :", message.member.joinedAt);

    message.channel.send(serverembed).then(response => { response.delete(15000) });
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'servinfo',
    description: `Permet d\'obtenir des informations sur le Server Discord où est exécuté la commande.`,
    usage: 'servinfo'
  };
