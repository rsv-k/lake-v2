const fs = require('fs').promises;

module.exports = async (reaction, user) => {
   console.log(
      'Message: ' + reaction.message.author.username,
      'User:' + user.username
   );

   const data = await fs.readFile('config.json');
   const config = JSON.parse(data);

   if (reaction.message.author.id !== config.ownerId) {
      return;
   }

   if (config.forbiddenIds.includes(user.id)) {
      reaction.users.remove(user);
   }
};
