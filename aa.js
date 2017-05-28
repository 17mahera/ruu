// Requires
const Discord = require('discord.js')
const fs = require('fs')
const config = require('./config.json');
// Create an instance of a Discord client
const client = new Discord.Client()

// The bot is ready
client.on('ready', () => {
  console.log('Bot Started')
  message.channel.send("AutonomousAnswerer now online!")
})

client.on('message', (message) => {// when message is sent
  // Set the prefix
  let prefix = config.prefix;

  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if(message.author !== client.user) return;  // Exit if not me

  if (message.content ===("<>")){ // when message is <>
      message.channel.send("Shinies!"); // send running message into the channel where the message was sent
  }

  else if (message.content.startsWith(prefix + 'help'))
  {
    message.channel.send('I don\'t know what to help with yet!');
  }
  else if (message.content.startsWith(prefix + 'idoruu'))
  {
    message.channel.send('http://i.imgur.com/Emk9LEb.png!');
  }

  else if(message.content.startsWith(config.prefix + 'prefix'))
  {
    // if it's not me it won't work
    if(message.author.id !== config.ownerID) return;
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(' ').slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;

  // Now we have to save the file.
  fs.writeFile('./config.json', JSON.stringify(config));
}
  else if(message.content.startsWith(config.prefix + 'waifu'))
  {
    {
    message.channel.send('AA-senpai!');
    }

  }
  const params = message.content.split(' ').slice(1);
  if (message.content.startsWith(prefix + 'prune')) {
    // get number of messages to prune
    let messagecount = parseInt(params[0]);
    // get the channel logs
    message.channel.fetchMessages({
        limit: 100
      })
      .then(messages => {
        let msg_array = messages.array();
        // filter the message to only your own
        msg_array = msg_array.filter(m => m.author.id === client.user.id);
        // limit to the requested number + 1 for the command message
        msg_array.length = messagecount + 1;
        // Has to delete messages individually. Cannot use `deleteMessages()` on selfbots.
        msg_array.map(m => m.delete().catch(console.error));
        message.channel.send(messagecount+' messages deleted.');
      })
})
client.login(process.env.BOT_TOKEN)
