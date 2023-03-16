/*
    1. Have the NodeJS server render views/index.ejs that has the html content for the client whenever the client requests "/" 
        routings/index.js
        app.get("/", function(req, res){
            res.render("index", {});
        });

    2. In the client codes, have a javascript code that asks the user for their name. Store the user input in a variable called name
        <script>
            var name = prompt("What is your name");
        </script>

    3. Have the client EMIT to the server an event called "got_a_new_user" and pass 'name' to the server.
        <script>
            var name = prompt("What is your name");
            io = io.connect();
            io.emit("got_a_new_user", {name:name});
        </script>

    4. Have the server LISTEN for an event called "got_a_new_user". When this event gets triggered, 
    4.1. Have the server BROADCAST an event called 'new_user' to the client with the name of the new user attached to the event.
            app.io.route('got_a_new_user', function(req){
                app.io.broadcast('new_user', {new_user_name: req.data.name});
            });
    4.2 we store the name/session_id of the new user in a variable/array/hash called users;
        
        var users = {};
    
    4.3 to the person who sent this request, we EMIT an event called "existing_users" with all the users data.

        app.io.route("got_a_new_user", function(req){
            app.io.broadcast("new_user", {new_user_name: req.data.name});
            req.io.emit();
        });

    5. Have the client LISTEN for an event called 'new_user' and when this event gets triggered, have jQuery render a new box with the new user's name.
        <script>
            var name = prompt("What is your name");
            io = io.connect();
            io.emit("got_a_new_user", {name:name});
            
            io.on("new_user", function(data){
                //render this information into HTML
            });
        </script>
    6. Wait... But this does not detect when a user disconnects from the socketIO connection. To do this, we need to have the server LISTEN for an event called 'disconnect' and when this event gets triggered, broadcast an event called 'disconnect_user' to all clients.
    7. We need to have the client LISTEN for an event called 'disconnect_user' and remove any html box associated with this user.

*/
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = app.listen(8000, () => {console.log('Running in localhost at port 8000');});

app.get('/', function(req, res){
    res.render('index', {});
});

var io = require('socket.io')(server);

var users = [];

io.on('connection', function(socket){
    socket.on("got_a_new_user", function(req){
        users.push({name: req.name, session_id: socket.id});
        io.emit('new_user', {new_user_name: req.name});
        return users;
    });

    io.emit('existing_users', {users: users});
    
});





