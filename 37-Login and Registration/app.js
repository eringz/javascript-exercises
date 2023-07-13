const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const config = require('./config/config');
const routes = require('./routes');
const session = require('express-session');

app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session(config.session));
app.set('view engine', 'ejs');
/**
 *  DOCU: Set default routing from routes file.
 *  DEVELPER: Ron Garcia Santos
 */
app.use('/', routes);

/**
 *  DOCU: Set in Localhost running from a config method of Config class.
 *  DEVELOPER: Ron Garcia Santos
 */
app.listen(config.port, () => {
    console.log(`Running in localhost port ${config.port} by ${config.author}`)
})

