const cron = require('node-cron');
const log = console.log;
const sendMsg = require('./sender');

cron.schedule('0 */3 * * *', () => {
  // cron.schedule('*/20 * * * *', () => {
  sendMsg();
  log('Message sent!');
});
