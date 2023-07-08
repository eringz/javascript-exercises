const express = require('express');
const config = require('./config/config');
const mysql = require('mysql');
const db = require('./config/db');
const routes = require('./routes');
const session = require('express-session');
const app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.urlencoded({extended:true}));
app.use(session(config.session));

app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
});

// connection.connect();



connection.end();

// Default routing
app.use('/', routes);

app.listen(config.port, () => {
    console.log(`This server is running in port ${config.port} by ${config.author}`);
})