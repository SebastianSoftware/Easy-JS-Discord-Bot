// Its recomended to change all the SSEJSDB to your bot name
//Remember to download discord.js v12 package and use node.js
const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "/"; // this will change in the future versions
client.on('ready' => {
  console.log('Logged In :D')
});
client.on('message', message => {
  //Commands
  if(message.channel.startsWith('test') {
      message.channel.send('ok');
     }
  if(message.channel.startsWith(prefix + 'help')) {
      const help = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("SSEJSDB Help")
      .setDescription("This is the help menu for SSEJSDB")
      .addField("Interaction Commands", "Use `" prefix + " help interaction`")
      .addField("Fun Commands", "Use `" + prefix + " help Fun`")
      .addField("Moderation Commands", "Use `" + prefix + " help interaction`")
      .addField(" Commands", "Use `" + prefix + " help interaction`")
      message.channel.send(help)
  }
})
client.login(""); //coloca el TOKEN de tu bot aqui, recuerda ir a https://discord.com/developers/applications | Recuerda colocarlo dentro de las comillas
