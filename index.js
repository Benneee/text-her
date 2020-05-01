const cron = require('node-cron');
const log = console.log;
const sendMsg = require('./sender');

cron.schedule('0 */3 * * *', () => {
  sendMsg();
  log('Message sent!');
});
