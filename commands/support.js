exports.run = (client, message, args) => {
  message.delete(message.author)
return message.channel.sendMessage( {
  embed: {
      color: 3447003,
      title: ``,
      fields: [
          {
              name: `Discord Support : **☆ MultiGames'Serv**`,
              value: `\nInvitation : https://discord.me/multigamesserv`,
              inline: true
          },

                      ],
                      timestamp: new Date(),
                      thumbnail: {
                          url: client.user.avatarURL
                      }
                  }
              }).then(response => { response.delete(15000) });;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'support',
  description: 'Permet de rejoindre le Discord du Support.',
  usage: 'support'
};
