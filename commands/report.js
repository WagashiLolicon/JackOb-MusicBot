const Discord = require("discord.js");
 exports.run = async (client, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Merci de mentionner l'Utilisateur a Report");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setTitle(`Report :`)
    .setDescription(":ballot_box_with_check: Report reçu")
    .setColor("ff8c00")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Je ne trouve le channel **reports**, veuillez le créer.");
    message.channel.sendMessage(`:white_check_mark: Report envoyer !`).then(response => { response.delete(25000) });
       message.delete(message.author)


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'report',
    description: 'Permet de report un Joueur.',
    usage: 'report <user> <raison>'
  };
