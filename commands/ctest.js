const Discord = require("discord.js");
exports.run = (client, message) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Yes");
  if(!args[0]) return message.channel.send("Tu n'a pas la permission !");
message.delete(message.author)
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("15f153")
  .setThumbnail(sicon)
  .setFooter(`Jack'Ob`)
  .addField("Nom du Server :", message.guild.name)
  .addField("Premier channel crée :", message.guild.channels.filter(c => (c.type === 'text')).first().name)
  .addField("Créateur", `${message.guild.owner}`)
  .addField("Crée le :", message.guild.createdAt)
  .addField("Tu l'a rejoin le :", message.member.joinedAt)
  .addField("Total des Membres :", message.guild.memberCount);
    message.guild.channels.filter(c => (c.type === 'text')).first().send(serverembed).then(response => { response.delete(15000)
    });
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["si"],
  permLevel: 0
};

exports.help = {
  name: `servinfo`,
  description: `Permet d'obtenir des informations sur le Server.`,
  usage: 'servinfo'
};
