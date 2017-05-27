// Requires
const Discord = require('discord.js')

// Create an instance of a Discord client
const client = new Discord.Client()

// The bot is ready
client.on('ready', () => {
  console.log('Bot Started')
})

client.on('message', (message) => {// when message is sent
  // Set the prefix
  let prefix = config.prefix;

  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content ===("<>")){ // when message is <>
      message.channel.sendMessage("Shinies!"); // send running message into the channel where the message was sent
  }

  if (message.content.startsWith(prefix + 'help'))
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
    // if it's not me it won't work
    if(message.author.id !== config.ownerID)
    {
      message.channel.send('Not AA-senpai go away');
    }
    else
    {
    message.channel.send('AA-senpai!');
    }

  }
})
client.login(process.env.BOT_TOKEN)
