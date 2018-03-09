module.exports = (guild, user, message) => {
guild.channels.filter(c => (c.type === 'text')).first().send(`${user.username} a été banni(e)!`);
console.log(message.guild.channels.filter(c => (c.type === 'text')).first())
};
