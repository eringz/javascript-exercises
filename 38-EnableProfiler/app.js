const express = require('express');
const app = express();
const routes = require('./routes');
const { port, author } = require('./config/config');

app.set('view engine', 'ejs');
app.use('/', routes);
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`The server is running in localhost port ${port} by ${author}`);
})
