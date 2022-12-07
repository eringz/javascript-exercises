var express = require('express');
const app = express();

app.use(express.static(__dirname+'/static'));
app.use('/style.css',express.static(__dirname+'/static/style.css'));
app.use('/images/special-delivery.jpg',express.static(__dirname+'/static/special-delivery.jpg'));
app.use('/images/onepiece.png',express.static(__dirname+'/static/onepiece.png'));
app.use('/images/newport.jpg',express.static(__dirname+'/static/newport.jpg'));
app.use('/images/leyte.gif',express.static(__dirname+'/static/leyte.gif'));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

//render files in each pages
app.get('/movies', function(request,response){
    response.render(__dirname + '/views/movies');
});

app.get('/movies/new', function(request,response){
    response.render(__dirname + '/views/add_movie');
});

app.get('/theaters', function(request,response){
    response.render(__dirname + '/views/theaters');
});

app.listen(8000, function(){
    console.log('listening to port 8000');
});