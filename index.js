//Main starting point of the application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');


// DB setup
mongoose.connect('mongodb://localhost:auth/auth');

//App setup
/*
Morgan and body parser are middleware in express js
Middleware - any incomming request is passed through
Morgan is a logging framework - logging incomming requests
Body parser - will parse any request as json

*/
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3091;

/*
http is a native node lib - working very low level with HTTP requests
create http server who knows how to receive requests and
forward anything that comes in to our express application
*/
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on port:'+port);
