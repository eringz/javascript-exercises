const express = require('express');
const config = require('./config/config');
const routes = require('./routes');
const session = require('express-session');
const app = express();

//Use static assets for css and app enable to use sessions.
app.use(express.static(__dirname + '/assets'));
// app.use(session(config.session));

//Set to accept ejs files.
app.set('view engine', 'ejs');

// Default routing
app.use('/', routes);

//Running localhost by port 8080.
app.listen(config.port, () => {
    console.log(`This server is running in port ${config.port} by ${config.author}`);
})