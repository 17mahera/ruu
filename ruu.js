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
  if (process.env.SELF_BOT=='TRUE') prefix=="AA";
  else let prefix = config.prefix;

  if (process.env.SELF_BOT=='TRUE'&& message.author.id !== config.ownerID) return;
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
  var commands=[
  ['help','I don\'t know what to help with yet! For now, though, I think I can: *idoruu*, *ruumove*,*heruusy*, and *ruuyear*!'],
  ['idoruu','http://i.imgur.com/Emk9LEb.png'],
  ['ruumove','http://i.imgur.com/49dk6gD.png'],
  ['heruusy','http://i.imgur.com/Hdcsu8e.jpg'],
  ['ruuyear','http://i.imgur.com/c6cfRd1.png'],
  ['clear','It\'s prune not clear!']
];
  for( i =  0; i<commands.length;i++)
  {
    if (message.content.startsWith(prefix + commands[i][0]))
    {
      message.channel.send(commands[i][1]);
    }

  }
  const params = message.content.split(' ').slice(1);
  if (message.content.startsWith(prefix + 'prune')) {
    // get number of messages to prune
    let messagecount = parseInt(params[0]);
    // get the channel logs
    if(message.author.id !== config.ownerID)
    {
      message.channel.send('Not AA-senpai, authorization denied');
    }
    else
    {
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
    }
  }
})
client.login(process.env.BOT_TOKEN)
