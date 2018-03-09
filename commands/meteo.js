const Discord = require('discord.js');
const weather = require('weather-js');
exports.run = (client, message) => {
message.delete(message.author)
          var location = message.content.substr(6);
          var unit = "C";
          try {
              weather.find({search: location, degreeType: unit}, function (err, data) {
                  if (err) {
                      console.log(Date.now(), "Erreur", "Je ne peut pas trouvé d'information pour la méteo de " + location);
                      message.channel.sendMessage("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location).then(response => { response.delete(15000) });
                  } else {
                      data = data[0];
                      let embed = new Discord.RichEmbed()
                      .setTitle(`**Méteo pour ${data.location.name} ${data.current.timezone}**`)
                      .setColor(`0cdd1f`)
                      .setThumbnail(data.current.imageUrl)
                      .addField(`\n\n__Aujourd'hui__`, `\u200B`)
                      .addField(`\nTempérature`, data.current.temperature + "°" + unit, true)
                      .addField(`Levé / Couché de Soleil`, data.current.sunsetTime + ` - ` + data.current.sunriseTime)
                      .addField(`Vent`, data.current.winddisplay, true)
                      .addField(`humidité`, data.current.humidity + "%")
                      .addField(`Ciel`, data.current.skytext)
                      .addField(`__Demain__`, `\u200B`)
                      .addField(`\nTempérature`, `**Maximales** : ${data.forecast[1].high} °${unit} - **Minimales** : ${data.forecast[1].low}°${unit}`, true)
                      .addField(`Précipitation`, data.forecast[1].precip + "% de chance", true)
                      .addField(`Ciel`, data.forecast[1].skytextday)
                      message.channel.sendEmbed(embed).catch(console.error).then(response => { response.delete(15000) });
                      message.delete(message.author);
                  }
              });
          } catch (err) {
              console.log(Date.now(), "Erreur", "Weather.JS a rencontré une erreur");
              message.reply("Idk pourquoi c'est cassé tbh :(").then(response => { response.delete(15000) });
          }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meteo',
  description: 'Permet de voir la météo pour une ville.',
  usage: 'meteo <ville> <pays>'
};
