const Discord = require ("discord.js")
const client = new Discord.Client();

exports.run = (client, message) => {
  
 message.channel.send("Para Havada!").then(message => { 
 var plasmic = ["\<a:coins:758618013313925120> Aferin Yazı!", "\<a:coins:758618013313925120> Helllall Abime Tura!", "\<a:coins:758618013313925120> Helal Len Dik!"]
  var plasmicsonuç = plasmic[Math.floor(Math.random() * plasmic.length)];
  message.edit(`${plasmicsonuç}`);

 });
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazıtura"],
  permLevel: 0
};

exports.help = {
  name: "yazı-tura",
  description: "yazı-tura işte ne sandın",
  usage: "!yazı-tura nolabilirki başka"
};