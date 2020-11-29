const Discord = require('discord.js');
const lake = new Discord.Client();
const config = require('./config.json');

if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
} else {
   require('./server');
}

lake.on('ready', () => console.log(`Logged in as ${lake.user.tag}!`));

// lake.on('message', (msg) => {
//    if (msg.author.id !== '481189853241802792') {
//       return;
//    }

//    const [command, id] = msg.content.split(' ');
//    if (command === `${config.perfix}mute`) {
//       msg.reply('pong');
//    }
// });

lake.on('messageReactionAdd', async (reaction, user) => {
   if (reaction.message.author.id !== '481189853241802792') {
      return;
   }

   if (config.forbiddenIds.includes(user.id)) {
      reaction.users.remove(user);
   }
});

lake.login(process.env.TOKEN);
