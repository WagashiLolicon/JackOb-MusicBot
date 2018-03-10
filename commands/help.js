const settings = require('../settings.js');
exports.run = (client, message, params) => {
  if (!params[0]) {
	const msg = 'message'
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
      message.delete(message.author)
	message.channel.sendCode('asciidoc', `= Liste des Commandes =\n\n[Use ${settings.prefix}help <commandname> pour plus de détail]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`).then(response => { response.delete(30000) });
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      msg.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h','aide'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Permet de recevoir la liste des commandes.',
  usage: 'help'
};
