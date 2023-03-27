const express = require('express');
const app = express();
var session = require('express-session');  

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = app.listen(port = 8000, function(){
    console.log('Running in localhost at port '+port);
});

const io = require('socket.io')(server);
let counter = 0;

app.get('/', function(req, res){
    res.render('index');
});

var count = 0;
var player_x = 80;
var players = [];
console.log('count before connection', count);
io.on('connection', function(socket){
    
    
    var player_y = 740;
    count++;
    console.log(`${socket.id} is connected`);
    socket.on('new_player', (req) =>{
        players.push({id: socket.id, x: player_x, y: player_y });
        console.log(players);
        player_x = player_x + 80;
        io.emit('existing_players', {players: players});
    });

    socket.on('disconnect', function(){
        console.log(`${socket.id} is disconnected`);
        let temp = [];
        console.log('players length:', players.length)
        for(let i=0; i<players.length; i++){
            if(players[i].id != socket.id){
                console.log('this is going to remain', players[i]);
                temp = players[i];
            }
        }
        console.log('temporary array', temp);
        players = temp;
        console.log('players lists', players);
        count--;
        player_x = player_x - 80;
        console.log(players);
        console.log('players left after', players.length);
    })
});