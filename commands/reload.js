exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.sendMessage(`Veuillez indiquer une commande a reload !`).then(response => { response.delete(5000) });
  } else {
    message.channel.sendMessage(`Reloading: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Le commande : **${command}** a bien été reload !`).then(response => { response.delete(3000) });
          })
          .catch(e => {
            m.edit(`La Commande que vous voulez relaod a rencontré une erreur : ${command}\n\`\`\`${e.stack}\`\`\` `);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Permet de Reload un fichier de commande, Si il a été modifié ou bien mis à jour.',
  usage: 'reload <commandname>'
};
