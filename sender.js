const accountSid = process.env.ACCT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const log = console.log;

const msgs = require('./msgs');
let currentMsg = 0;

function sendMsg() {
  client.messages
    .create({
      body: msgs[currentMsg],
      from: '+12513027512',
      to: process.env.RECIPIENT,
    })
    .then((message) => {
      currentMsg++;
      log(message.body);
    })
    .catch((error) => log('error: ', error));
}

module.exports = sendMsg;
