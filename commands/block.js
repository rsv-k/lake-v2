const fs = require('fs');

module.exports = (id) => {
   fs.readFile('../config.js', (err, data) => {
      if (err) {
         throw err;
      }

      const config = JSON.parse(data);
      console.log(config);
   });
};
