const express = require('express');
const app = express();
const routes = require('./routes');
const { port, author } = require('./config/config');

app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.use('/', routes);



app.listen(port, () => {
    console.log(`The server is running in localhost port ${port} by ${author}`);
})
