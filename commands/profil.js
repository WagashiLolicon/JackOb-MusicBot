const Discord = require('discord.js');
exports.run = (client, message, args) => {
var memberavatar = message.author.avatarURL
var membername = message.author.username
  var mentionned = message.mentions.users.first();
  var getvalueof;
  if(mentionned){
      var getvalueof = mentionned;
  } else {
      var getvalueof = message.author;
  }

  if(getvalueof.bot == true){
    var checkbot = "L'utilisateur est un BOT";
} else {
    var checkbot = "L'utilisateur n'est pas un BOT";
  }
  if(getvalueof.presence.status == 'online'){
    var status = "Online";
} else {
    var status = "Offline";
  }
  if(getvalueof.presence.status == 'dnd'){
    var status = "Ne pas Déranger";
  }
  if(getvalueof.presence.status == 'idle'){
    var status = "Absent";
  } else {
  if(getvalueof.presence.status == 'invisible')
    var status = "Invisible"
  }
message.delete(message.author)
 message.channel.sendMessage({
    embed: {
      type: 'rich',
      description: ``,
      fields: [{
        name: ':label: Nickname',
        value: getvalueof.username,
        inline: true
      }, {
        name: ':id: Tag',
        value: getvalueof.id,
        inline: true
      },{
        name: ':hash:',
        value: getvalueof.discriminator,
        inline: true
},{
        name: 'Status',
        value: status,
        inline: true
},{
        name: ':robot: ChekBot',
        value: checkbot,
        inline: true
}],
      color: 0xE46525,
      footer: {
        text: 'by N_atha_n',
        proxy_icon_url: ' '
      },

      author: {
        name: membername,
        icon_url: memberavatar,
        proxy_icon_url: ' '
      }
    }
}).then(response => { response.delete(25000) });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profil',
  description: 'Permet de voir le profile d\'un joueur.',
  usage: 'profil <user>'
};
