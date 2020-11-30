const fs = require('fs').promises;

module.exports = async (msg, ids) => {
   const id = ids[0];
   if (!id || id.length !== '481189853241802792'.length) {
      return msg.reply('Invalid id');
   }

   const data = await fs.readFile('config.json');
   let config = JSON.parse(data);

   if (!config.forbiddenIds.includes(id)) {
      return msg.reply('Such id is not blocked');
   }

   config.forbiddenIds = config.forbiddenIds.filter((i) => i !== id);
   config = JSON.stringify(config, null, 3);

   await fs.writeFile('config.json', config);
   msg.reply('Id has been unblocked');
};
