require("dotenv").config();

const TWACCOUNTSD = process.env.TWACCOUNTSD;
const TWAUTHTOKEN = process.env.TWAUTHTOKEN;

const accountSid = TWACCOUNTSD; // Your Account SID from www.twilio.com/console
const authToken = TWAUTHTOKEN; // Your Auth Token from www.twilio.com/console
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

const clientMessage = "lighthouselabs"; //must be string
const reciverNumber = "+1780720138"; // must be a string and have +1 at start

// this  is the Et call home function
// this is abasic  function that will take in two parmas to message people

const etPhoneHome = function (clientMessage, reciverNumber) {
  client.messages
    .create({
      body: clientMessage,
      to: "+12368782639", // Text this number must be a string and have +1at the start
      from: "+19282956983", // From a valid Twilio number
    })
    .then((message) =>
      console.log("Success you have sent a message home", message.sid)
    )
    .catch("err", console.error());
};
// etphonehome(clientMessage);
// pass the clientmessage and  the phone number
// etphonehome(clientMessage)
console.log("Et Phone Home");
console.log(".............");
console.log("Et Phone Home");
console.log(".............");
console.log("Et Phone Home");

// this will allow email form default service on computer
// $(document).ready(function(){
//   $('.button').on('click',function(){
//      window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
//   });
// });

// module.exports = { etPhoneHome };
