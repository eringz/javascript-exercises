/*
    Have localhost:7890/movies go to a simple HTML page that shows some cool posters of your favorite movies.  
        These pictures should be stored in your images folder on your server.  
        DON'T just link to pictures of movie posters stored somewhere else!!
    Have localhost:7890/theaters show a simple HTML page having some pictures of theatre locations and label (ex. specific mall).  
        Again, make sure these pictures are stored on your server.
    Have localhost:7890/movies/new show a simple form where the user can add a new movie information. 
        For the /movies/new HTML page, no need to store this information in the database nor is there a need to validate the entries. 
        Simply have the form there.
*/

//get the http module
var http = require('http');

//fs module allows us to read and write content for responses!!
var fs = require('fs');

const static_contents = require('./static');


//creating a server using http module:
var server = http.createServer(function(request,response){
    
    // //see what URL the clients are requesting
    console.log('client request URL:', request.url);
    static_contents(request, response);
    
   
});

//tell your server which port to run on
server.listen(8920);

//print to terminal window
console.log('Running in localhost 8920');