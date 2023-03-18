/*
    1. Have a render file 'index.ejs' for root('/') routing of client. If the user has not filled out the name before, 
        have a js prompt('Enter your name') and store a variable as name.
            test socket.id as session id.
	
    2. Have a socket setup and connection for all users. 
        
    3. Have an client emit event name 'got_a_new_user' with a parameter of name.

    4. Have a server listen to event name 'got_a_new_user' and with request name.
        4.1 Have a server Broadcast EMIT to all clients event name 'new_user' with parameters of name as username and socket.id as user_id.
    
    5. Have a client listen to event 'new_user' and render a p tag with string of 'Server: username join the group'.

    6. Have a submit form of message  and ah guessing word in client and make a client emit for event name 'word_guess'

    7. Have a server listen to event 'word_guess' and make a condition of word and request word submitted by form.
        7.1 if submitted word is same as the guess word, have a server Broadcast EMIT to all clients the result of req.name guessed the word message.
        7.2 else have a server Broadcast EMIT 'guess_result' to all clients the result of req.name: request word message.
    
    8. Have a client listen to event 'guess_result' and add render to a p tag in #content id of division
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

io.on('connection', function(socket){
    io.emit('present_id', {id: socket.id});

    socket.on("raise_hand", function(req){
        console.log('raise_hand',req);  
        let result = `Socket id ${req.id} is raise hand!`;  
        io.emit('user_raise_hand', {result: result});
    })
});

