/*
    Have the server render views/index.ejs that has the form for the user to fill out
    The user fills out the form and submits
    The form information is EMITTED to the server with the event name "posting_form"
    The server listens for an event 'posting_form' and when this event gets triggered, 
        organizes all the emitted information to form a single message and sends this single message with the event called 'updated_message'. 
        It also EMITs an event called 'id_number' with random number between 1-1000.
    The client listens for an event called 'id_number' and when this event gets triggered, shows the number in the HTML.
    The client listens for an event called 'updated_message' and when this event gets triggered, displays the message somewhere in the HTML
*/
const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.render('index');
});

const server = app.listen(port = 8000, function(){
    console.log('Running in localhost at port '+ port);
});

const io = require('socket.io')(server);

io.on('connection', function(socket){//2
    socket.on('posting_form', function(formData){
        console.log(formData);
    });
    // socket.emit('posting_form',{})
});



app.get('')


