const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Ölçüyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  18CM İdare Eder** \<a:pensive_wank:758613878497607700> ' ,'**Senin Malafatın  11CM Normal** \<a:pensive_wank:758613878497607700>' ,'**Senin Malafatın 32CM  Tam Çekmelik** \<a:pensive_wank:758613878497607700>' ,'**Senin Malafatın  35CM Maşallah** \<a:pensive_wank:758613878497607700>' ,'**Senin Malafatın  8CM Ağla** \<a:pensive_wank:758613878497607700>' ,'**Senin Malafatın  65CM  Ebenin...** \<a:seq:833677187336765441>' ,'**Senin Malafatın 5CM  Ağla** \<:GgKurbaga:839797850540212234>' ,'**Senin Malafatın 31CM  sjsj** \<:GgKurbaga:839797850540212234>' ,'**Senin Malafatın  14CM Ehh İşte** \<:GgKurbaga:839797850540212234>' ,'**Senin Malafatın  1CM Hahahhah** \<:GgKurbaga:839797850540212234>','**Senin Malafatın  52CM  At yarra Mübarek** \<a:seq:833677187336765441>' ];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};