exports.run = (client, message) => {
var now = require('performance-now');
      var startTime = now();
      message.channel.sendMessage("Wait...")
          .then(message => {
              var endTime = now();
              return message.edit((endTime - startTime).toFixed(3)+" ms.");
          }).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'botping',
  description: 'Permet de voir le ping du bot.',
  usage: 'botping'
};
