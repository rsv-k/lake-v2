const fs = require('fs');

module.exports = (msg, ids) => {
   const id = ids[0];
   if (!id || id.length !== '481189853241802792'.length) {
      return msg.reply('Invalid id');
   }

   fs.readFile('config.json', (err, data) => {
      if (err) {
         throw err;
      }

      let config = JSON.parse(data);
      if (config.forbiddenIds.includes(id)) {
         return msg.reply('Such id has already been blocked');
      }

      config.forbiddenIds.push(id);

      config = JSON.stringify(config, null, 3);
      fs.writeFile('config.json', config, (err) => {
         if (err) {
            throw err;
         }

         msg.reply('Id has been blocked');
      });
   });
};
