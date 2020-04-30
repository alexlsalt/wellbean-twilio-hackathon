# Wellbean App x Twilio Hackathon 

Created and developed by Alex Morton

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

- Node.js
- A Twilio trial account - sign up

### Twilio account settings

wellbean will give you a ready-made starting point for generating your own stay-in-touch reminders. Before we begin, we need to collect all the config values we need to run the application:

| Config value  | Description  |
|---|---|
| Account sid  | Your primary Twilio account identifier - find this in the Console.  |
| Auth token  | Used to authenticate - just like the above, you'll find this here.  |
| Your Whatsapp number  | A Twilio phone number in E.164 format - you can get one here  |
| The Twilio whatsapp number  | You will have this once you set up your Whatsapp Sandbox within Twilio  |

### Local development

1. Clone this repository to your local machine and then cd into it

> git clone git@github.com:twilio-labs/sample-template-nodejs.git
> cd sample-template-nodejs


### Licenses

### Disclaimier
