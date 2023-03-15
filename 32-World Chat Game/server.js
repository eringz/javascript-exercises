/*
    1. Have a render file 'index.ejs' for root('/') routing of client. If the user has not filled out the name before, 
        have a js prompt('Enter your name') and store a variable as name.
            test socket.id as session id.
	
    2. Have a socket setup and connection for all users. 
        2.1 Have a render chatboard with existing users and realtime chats even before a new user joined the room
        2.2 Have an hardcoded array of users in server side with a variable of users
        2.3 Have a server emit to event name 'existing_users' with a parameter of array users
        2.4 Have a client listen to event name 'existing_users' and use it to render in html.

    3. Have an client emit event name 'got_a_new_user' with a parameter of name and id.

    4. Have a server listen to event name 'got_a_new_user' and add its parameter in users array.

    5. Have a submit form of message  and ah guessing word in client and make a client emit for event name 'word_guess'
*/
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


var users = [
];
io.on('connection', function(socket){
    io.emit('existing_user', users);
    socket.on('got_a_new_user', function(req){
        users.push({name: req.name, id: socket.id});
        io.emit('existing_user', users);
    });
    
});


