const express = require('express');

const app = express();

//html file folders
app.use('/',express.static(__dirname + "/static"));
app.use('/movies',express.static(__dirname + "/static/movies.html"));
app.use('/add_movie',express.static(__dirname + "/static/add_movie.html"));
app.use('/theaters',express.static(__dirname + "/static/theaters.html"));

//style.css
app.use('/style.css',express.static(__dirname + "/static/style.css"));

//images
app.use('/images/special-delivery.jpg',express.static(__dirname + '/static/special-delivery.jpg'));
app.use('/images/onepiece.png',express.static(__dirname + '/static/onepiece.png'));
app.use('/images/newport.jpg',express.static(__dirname + '/static/newport.jpg'));
app.use('/images/leyte.gif',express.static(__dirname + '/static/leyte.gif'));

app.listen(8000, function(){
    console.log('listening to port 8000');
})
