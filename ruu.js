// Requires
const Discord = require('discord.js')
const fs = require('fs')
const config = require('./config.json');
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
      message.channel.send("Shinies!"); // send running message into the channel where the message was sent
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
  else if(message.content.startsWith(config.prefix + 'terracolor'))
  {
      if(message.author.id !== '227596952852758528')
      {
        message.channel.send('Not Terra-senpai go away');
      }
      else
      {
        let args = message.content.split(' ').slice(1);
        let cleaned = args.split('#').slice(1);
          let terracolor = '#'+cleaned[0];

        message.guild.roles.find('name', 'Terra').setColor(terracolor);
        message.channel.send('Here you go~!');
      }

  }
  var commands=[['help','I don\'t know what to help with yet!'],['idoruu','http://i.imgur.com/Emk9LEb.png']];
  for( i =  0; i<commands.length;i++)
  {
    if (message.content.startsWith(prefix + commands[i][0]))
    {
      message.channel.send(commands[i][1]);
    }
    if (message.content.startsWith(prefix +'testing'))
    {
      message.channel.send('the for loop is working but your list isn\'t X('+i+commands[i][0]);
    }
  }
})
client.login(process.env.BOT_TOKEN)
