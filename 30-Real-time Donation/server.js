const express = require('express');
const app = express();

app.use(express.static(__dirname + '/assets'));
app.set('public', __dirname + '/public');
app.set('view engine', 'ejs');

const server = app.listen(port = 8000, function(){
    console.log('Running in localhost at port '+port);
});
const io = require('socket.io')(server);

app.get('/', function(req, res){
    res.render('index');
});

var donation = 100;

io.on('connection', function(socket){ // build a connection to all users
    socket.emit('donation', {total: donation}); //emit the initial donation from server to client
    socket.on('choice', function(data){//fetch the data of event name choice from a user.
        donation += data.choice;
        io.emit('donation', {total: donation});//emit the total donation to all users
    });
});

