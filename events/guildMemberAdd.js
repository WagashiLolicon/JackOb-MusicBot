module.exports = (member, message, guild) => {
message.guild.channels.filter(c => (c.type === 'text')).first().send(`Bienvenue ${member.user.username} sur le serveur!`).then(response => { response.delete(60000) });
console.log(member.guild.channels.first().type)
};
