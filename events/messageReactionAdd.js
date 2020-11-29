const config = require('../config.json');

module.exports = (reaction, user) => {
   if (reaction.message.author.id !== config.ownerId) {
      return;
   }

   if (config.forbiddenIds.includes(user.id)) {
      reaction.users.remove(user);
   }
};
