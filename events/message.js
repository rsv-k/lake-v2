const commandsHandler = require('../commandsHandler');
const config = require('../config.json');

module.exports = (msg) => {
   if (msg.author.id !== config.ownerId) {
      return;
   }

   const [command, ...args] = msg.content.split(' ');
   if (!command.startsWith(config.perfix)) {
      return;
   }

   try {
      commandsHandler[command.slice(2)](msg, args);
   } catch (err) {
      console.log(err.message);
   }
};
