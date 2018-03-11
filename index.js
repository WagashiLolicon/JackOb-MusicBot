const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.js');
const token = require('./settings.js');
const chalk = require('chalk');
const prefix = 'n!'
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
require("opusscript")

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('ready', () => {
        client.user.setUsername(`Jack'Ob 📣`)
    rotateGames(client, 0);
    function rotateGames(client, i) {
        let games = [
            `☆ Aide ? ${prefix}help         `,
            `☆ Prefix : ${prefix}     `,
            `☆ ${client.guilds.size} Guilds | ${client.channels.size} Channels | ${client.users.size} Users`,
        ];
        if (i >= games.length) i = 0;
        client.user.setPresence({"status":"online", "game": {"type":"STREAMING", "name":games[i], "url": "https://twitch.tv/discordapp"}})

        setTimeout(() => {
            rotateGames(client, ++i);
        }, 25000);
    }
});
process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

client.on('warn', warn => {
  console.warn(chalk.reb('Warning !'));
});

client.on('error', error => {
console.error(chalk.red('Error !'));
});

client.login(process.env.token);
