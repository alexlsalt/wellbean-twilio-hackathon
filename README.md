![Wellbean bean](public/assets/img/wellbean_favicon.png)

# Wellbean App x Twilio Hackathon 

### Created and developed by [Alex Morton](https://alexlsalt.github.io/)  

Welcome! wellbean is my submission for the April 2020 Twilio hackathon. It's an app that generates automatic Whatsapp reminders for users to stay in touch with loved ones. Enjoy!

## About

During this period of self-isolation, I realized it's a great opportunity to stay in touch more frequently with friends and loved ones. I thought it would be a great idea to create an app that allowed me to input certain indivuduals and receive automated reminders for when to contact them, based on my own preferences.

I found that just a simple message reminder would help so much in keeping in touch with friends and family. 

### How it works

Run locally, the app is not set up to run on full time requirements. In other words, if a user wants to be reminded 'Daily' to call one of their contacts, the app will send a message about once every 20 seconds.

Below is the timetable for when users would receive Twilio messages via Whatsapp based on their contact frequency settings: 

| Frequency chosen  | Actual time elapsed between message sends  |
|---|---|
|  Daily | one message every 20 seconds  |
| Twice a Week  | one message every 40 seconds  |
| Weekly  | one message every 60 seconds  |
| Every Two Weeks  | one message every 80 seconds  |
| Monthly | one message every 100 seconds  |

## Features

- Node.js web server using Express.js
- User interface to set up contact reminders
- Project specific environment variables using .env files

## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- A Twilio trial account - [sign up](https://www.twilio.com/try-twilio)

### Twilio account settings

wellbean will give you a ready-made starting point for generating your own stay-in-touch reminders. Before we begin, we need to collect all the config values we need to run the application:

| Config value  | Description  |
|---|---|
| Account sid  | Your primary Twilio account identifier - find this in [the console](https://github.com/alexlsalt/wellbean-twilio-hackathon/blob/master/LICENSE).  |
| Auth token  | Used to authenticate - just like the above, you'll find this [here](https://www.twilio.com/console).  |
| Your Whatsapp number  | You'll need to add your Whatsapp account phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). |
| The Twilio whatsapp number  | You will have this once you set up your [Whatsapp Sandbox](https://www.twilio.com/console/sms/whatsapp/sandbox) within Twilio.  |

**Note:** To run the app locally and receive Whatsapp alerts, you'll need to authorize the Whatsapp sandbox to send alerts to your Whatsapp number. To authorize testing, head to your [Whatsapp Sandbox](https://www.twilio.com/console/sms/whatsapp/sandbox) for instructions on how to set up your testing sandbox.



### Local development

1. Clone this repository to your local machine and then cd into it

`git clone https://github.com/alexlsalt/wellbean-twilio-hackathon.git`
`cd wellbean-twilio-hackathon`

2. Install dependencies 

`npm install`

3. Edit the .env file to include the necessary environment variables - your Twilio account ID, Twilio auth token, and the phone numbers to add into the app.

4. Once your set up is complete, start the app by running 

`node app`

5. Head to your local port 3000 (http://127.0.0.1:3000/) to view the app.

6. Once you've submitted **three** contacts, you will start receiving simulated Whatsapp reminders.

7. **Important:** To close out of the app and end the message queue and sending, you must end the node process within your terminal (**Ctrl** + **C**)


### Licenses

[MIT](https://github.com/alexlsalt/wellbean-twilio-hackathon/blob/master/LICENSE)

### Disclaimier

No warranty expressed or implied. Software is as is.
