const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
const server = app.listen(port = 8000, function(){
    console.log('Running in localhost at port '+port);
});

//1. Create and render a view file called 'index.ejs' for client '/' root request.
app.get('/',function(req, res){
    res.render('index');
});

const io = require('socket.io')(server);

const rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];

io.on('connection', function(socket){
    //5. Have a server listen to event name 'chosen_action' and make a condition in corresponds of form action submit by user.
    socket.on('chosen_action', function(data){
        let color = '#' 
        if(data.action === 'light'){
            color = '#ffffff';
        }else if(data.action === 'random'){
            for(let i = 0; i < 6; i++){
                let x = Math.floor((Math.random()*16));  
                color += rgb[x]; 
            }
        }else if(data.action === 'dark'){
            color = '#000000';
        }

        //6. Have a server emit event name 'background_color'and broadcast to all users within socket connection the chosen color.
        io.emit('background_color', {color: color});
    });
});
