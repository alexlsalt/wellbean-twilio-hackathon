const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
require('dotenv').config();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNumber = process.env.MY_WHATSAPP_NUMBER;
const senderNumber = process.env.TWILIO_NUMBER;


let data = [
];

// Whatsapp functionality
const client = require('twilio')(accountSid, authToken);

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('contacts', {contacts: data});
    
    if (data.length >= 3) {

      const contactReminderMessage = contact => {
        console.log(`Hey there! This is your ${contact.frequency} reminder to reach out to ${contact.name} today. Love, wellbean`);

        client.messages.create({
          to: "whatsapp:" + myNumber,
          from: "whatsapp:" + senderNumber,
          body: `Hey there! This is your ${contact.frequency} reminder to reach out to ${contact.name} today. Love, wellbean`
        }).then(message => {
          callback(null, message.sid);
        }).catch(err => callback(err));
        
      }

      let time = 0;

      data.forEach(contact => {
        console.log(`Alerts set to contact ${contact.name} ${contact.frequency}.`);

        let timer = setInterval(() => {
          time += 1;
          if (time >= 0 && time % 20 === 0 && contact.frequency === 'Daily') {
            contactReminderMessage(contact);

          } else if (time >= 40 && time % 20 === 0 && contact.frequency === 'Twice a Week') {

            contactReminderMessage(contact);

          } else if (time >= 60 && time % 60 === 0 && contact.frequency === 'Weekly') {

            contactReminderMessage(contact);

          } else if (time >= 80 && time % 80 === 0 && contact.frequency === 'Every Two Weeks') {

            contactReminderMessage(contact);

          } else if (time >= 100 && time % 100 === 0 && contact.frequency === 'Monthly') {

            contactReminderMessage(contact);
            
          } 
        }, 1000);
        
      })

      if (time >= 10) {
        clearInterval(timer);
      }
    }
  });


  app.post('/', urlencodedParser, function(req, res) {
    data.push({
      name: req.body.name,
      frequency: req.body.frequency
    });
    res.json(data);

    
  });


  app.delete('/', function(req, res) {
    data = data.filter(contact => {
      return contact.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);

  });


};
