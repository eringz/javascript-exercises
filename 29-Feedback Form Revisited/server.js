const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

const server = app.listen(port = 8000, function(){
    console.log('Running in localhost at port '+ port);
});

const io = require('socket.io')(server);
let counter = 0;

io.on('connection', function(socket){
    
    /*
        DOCU: The server listens for an event 'posting_form' and when this event gets triggered, 
            organizes all the emitted information to form a single message and sends this single message with the event called 'updated_message'. 
            It also EMITs an event called 'id_number' with random number between 1-1000.
    */
    socket.on('posting_form', function(data){
        
        socket.emit('updated_message', `You emitted the following values in the server:
        {name: ${data.name}, course_title: ${data.course}, score: ${data.score}, reason: ${data.reason}}`);

        socket.emit('id_number', 'Random generated id number is '+ Math.round(Math.random()*1000));
        counter++;
        console.log(counter);
    });
});

app.get('/', function(req, res){
    res.render('index');
});




