exports.run = (client, message) => {
var msg = message
message.delete(message.author)
var num = message.content.substr(6)
var roll = Math.floor(Math.random() * num) + 1;
                    msg.channel.sendMessage("", {
                        embed: {
                            title: `:confetti_ball: Roll entre : **1 & ${num}**`,
                            color: 0x06DF00,
                            description: `Le numéro : **` + roll + `** est sortie vainqueur !`,
                            footer: {
                            text: `Roll by Jack'Ob`

                            }

                        }

                    }).catch(console.error).then(response => { response.delete(15000) });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Permet de roll un chiffre aléatoire entre 1 & <NombreAuChoix>.',
  usage: 'roll <nombre>'
};
