module.exports = (member, message) => {
message.guild.channels.filter(c => (c.type === 'text')).first().send(`Au revoir ${member.user.username}, tu vas nous manquer !`);
console.log(member.guild.channels.first().type)
};
