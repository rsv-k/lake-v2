require('./server');
const Discord = require('discord.js');
const lake = new Discord.Client();
const eventHandlers = require('./eventHandlers');

lake.on('ready', eventHandlers.ready);

// lake.on('message', (msg) => {
//    if (msg.author.id !== '481189853241802792') {
//       return;
//    }

//    const [command, id] = msg.content.split(' ');
//    if (command === `${config.perfix}mute`) {
//       msg.reply('pong');
//    }
// });

lake.on('messageReactionAdd', eventHandlers.messageReactionAdd);

lake.login(process.env.TOKEN);
