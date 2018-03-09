const Discord = require('discord.js');

exports.run = (client, message, args, member, user) => {
	
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
    var checkbot = "L'utilisateur est un Bot";
} else {
    var checkbot = "L'utilisateur n'est pas un Bot";
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
 message.channel.sendEmbed({
    embed: {
      type: 'rich',
      description: `***Requested by : ${message.author.username}***`,
      fields: [{
        name: ':label: Nickname',
        value: getvalueof.username,
        inline: true
},{
        name: ':id: Tag',
        value: getvalueof.id,
        inline: true
},{
        name: ':hash:',
        value: getvalueof.discriminator,
        inline: true
},{
        name: 'Nickname',
	value: member.nickname ? member.nickname : "None",
	inline: true
},{
        name: 'Status',
        value: status,
        inline: true
},{
        name: ':robot: ChekBot',
        value: checkbot,
        inline: true
},{
	name: 'Playing',
	value: user.presence.game ? user.presence.game.name : "None",
	inline: true
},{
        name: 'Registered',
	value: new Date(user.createdAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
	inline: true
},{
	name: 'Joined',
	value: new Date(member.joinedAt).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
	inline: true
}],
	    
    image: {
  url: getvalueof.avatarURL
    },
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
