const http = require('http');
const express = require('express');
const listController = require('./controllers/listController');
const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
listController(app);

// listen to port
app.listen(3000);
console.log('Hey there! Go ahead and list three contacts into the app on your local port 3000 and then wait for those reminders to come in! Love, wellbean');
		
