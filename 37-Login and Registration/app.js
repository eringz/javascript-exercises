const express = require('express');
const app = express();
const config = require('./config/config');
const routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));

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
    console.log(`Running in localhost port ${config.port}`)
})
