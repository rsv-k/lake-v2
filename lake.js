require('./server');
const Discord = require('discord.js');
const lake = new Discord.Client();
const eventHandlers = require('./eventHandlers');

lake.on('ready', eventHandlers.ready);

lake.on('message', eventHandlers.message);

lake.on('messageReactionAdd', eventHandlers.messageReactionAdd);

lake.login(process.env.TOKEN);
