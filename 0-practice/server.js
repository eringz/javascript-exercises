/*
    For this assignment, you will need a static directory. You will not need routes, ejs, nor a views directory.

    Create four html documents in your static directory. These files will be served with the following urls. 
        Why? Because we're requesting static content, and because of our Express static middleware, 
        our server knows to find static files in the static directory. 

    localhost:8000/movies.html - A simple HTML page that shows some cool posters of different movies.  
        These movie pictures should be stored in your static directory.  
        DON'T just link to pictures of cars stored somewhere else! Even better, 
        put them in a directory called 'images' inside of your static directory.

    localhost:8000/theaters.html - A simple HTML page with some pictures of theater locations.  
        Again, make sure these pictures are stored on your server.

    localhost:8000/form.html - A simple form where the user can add new movie information. 
        For this page, there is no need to have the form do anything. Simply display the form there.

    Also, add a basic html file in your static directory called index.html. 
        What happens when you navigate to the root route localhost:8000? 
*/

const express = require('express');
const app = express();

app.get(function(request, respons){

});

app.use(express.static(__dirname + "/static"));
app.use("/movies",express.static(__dirname + "/static/movies.html"));
app.use("/theaters",express.static(__dirname + "/static/theaters.html"));
app.use("/form",express.static(__dirname + "/static/form.html"));

console.log(__dirname);

app.listen(8000, function(){
    console.log('Running in localhost at port 8000');
});