const Discord = require("discord.js");
exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Yes");
  if(!args[0]) return message.channel.send("Tu n'a pas la permission !");
  const embed = new Discord.RichEmbed()
    .setTitle("Resultat :")
    .setColor(0x00AE86)
    .setTimestamp(new Date())
    .addField(`Clear ${args[0]} messages.`,``)
    .setImage(`https://image.noelshack.com/fichiers/2018/07/1/1518467153-checked.png`)
message.channel.send(embed).then(msg => msg.delete(3000));
message.delete(message.author)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clear'],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Permet de supprimer le nombre de message demandé.',
  usage: 'purge <nombre>'
};
