const express = require("express");
const router = express.Router();

require("dotenv").config();

const TWACCOUNTSD = process.env.TWACCOUNTSD;
const TWAUTHTOKEN = process.env.TWAUTHTOKEN;

const accountSid = TWACCOUNTSD; // Your Account SID from www.twilio.com/console
const authToken = TWAUTHTOKEN; // Your Auth Token from www.twilio.com/console
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

const reciverNumber = "+1780720138"; // must be a string and have +1 at start

// this  is the Et call home function
// this is abasic  function that will take in two parmas to message people

module.exports = (db) => {
  router.post("/", (req, res) => {
    let data = Object.keys(req.body);
    let message = data[0];
    console.log("this is req.body", message);
    // const clientMessage = ; //must be string
    client.messages
      .create({
        body: message,
        to: "+12368782639", // Text this number must be a string and have +1at the start
        from: "+19282956983", // From a valid Twilio number
      })
      .then((message) => {
        const myMessage = message.sid;
        res.json({ myMessage });
      })
      .catch("err", console.error());
  });
  return router;
};

//    let query = `SELECT * FROM widgets`;
//    console.log(query);
//    db.query(query)
//      .then((data) => {
//        const widgets = data.rows;
//        res.json({ widgets });
//      })
//      .catch((err) => {
//        res.status(500).json({ error: err.message });
//      });
//  });

// };
