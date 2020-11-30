const messageReactionAdd = require('./events/messageReactionAdd');
const ready = require('./events/ready');
const message = require('./events/message');

module.exports = {
   messageReactionAdd,
   ready,
   message,
};
