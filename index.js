//Remember to download discord.js v12 package and use node.js
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready' => {
  console.log('Logged In :D')
});
client.on('message', message => {
  //Commands
  if(message.channel.send('test') {
      message.channel.send('ok');
     }
})
client.login(""); //coloca el TOKEN de tu bot aqui, recuerda ir a https://discord.com/developers/applications | Recuerda colocarlo dentro de las comillas
