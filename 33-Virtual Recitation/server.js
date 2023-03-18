/*
    1. Have a render file 'index.ejs' for root('/') routing of client and connect user using socket.
	
    2. Have a server broadcast emit to all clients event name 'present_user'. 
        
    3. Have all online client listen to event name 'present_user' with a parameter of result and append p tag html with result data.

    4. Have a client click submit button of raise hand.
        4.1. Have a client emit  event name 'raise_hand' with a parameter of user own socket id as id.
    
    5. Have a server listens to event 'raise_hand' with parameter id and store it in result variable'.
        5.1. Have a server broadcast emit event name 'user_raise_hamd' to all clients online.

    6. Have all client online listens listen to event name 'user_raise_hand and append the result data to content id of a div rendered'

    7. Have a server listen to event 'disconnect' store result variable the disconnected socket id.
        7.1 Have a server broadcast emit event name 'disconnected_user' to only online clients excluding the disconnected client and store to result paramater.
    
    8. Have all online clients listen to event name 'disconnected_user' and fetch result data to append in content id of a div rendered.
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
    console.log(`${socket.id} is connected`);
    let result = `Socket id ${req.id} is present`;  
    io.emit('present_user', {result: result});

    socket.on("raise_hand", function(req){
        console.log('raise_hand',req);  
        let result = `Socket id ${req.id} is raise hand!`;  
        io.emit('user_raise_hand', {result: result});
    })

    socket.on('disconnect', function(){
        console.log(`${socket.id} is disconnected`);
        let result = `Socket id ${socket.id} left`;
        socket.broadcast.emit('disconnected_user', {result: result});
    });

});





