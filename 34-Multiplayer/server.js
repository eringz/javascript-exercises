
const express = require('express');
const app = express();
var session = require('express-session');   

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

const server = app.listen(port = 8000, function(){
    console.log('Running in localhost at port '+port);
});

const io = require('socket.io')(server);
let counter = 0;

app.get('/', function(req, res){
    res.render('index');
});

