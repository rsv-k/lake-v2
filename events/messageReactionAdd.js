const config = require('../config.json');

module.exports = (reaction, user) => {
   console.log(
      'Message: ' + reaction.message.author.username,
      'User:' + user.username
   );
   if (reaction.message.author.id !== config.ownerId) {
      return;
   }

   if (config.forbiddenIds.includes(user.id)) {
      reaction.users.remove(user);
   }
};
