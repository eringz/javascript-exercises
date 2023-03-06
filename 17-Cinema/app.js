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

//creating a server using http module:
var server = http.createServer(function(request,response){  
    
    //see what URL the clients are requesting
    console.log('client request URL:', request.url);

    let requests = [
        {name: '/', location: './views/index.html', encoding: 'utf8', contentType: 'text/html' },
        {name: '/movies', location: 'views/movies.html', encoding: 'utf8', contentType: 'text/html' },
        {name: '/theaters', location: 'views/theaters.html', encoding: 'utf8', contentType: 'text/html' },
        {name: '/movies/new', location: 'views/add_movie.html', encoding: 'utf8', contentType: 'text/html' },
        {name: '/stylesheets/style.css', location: './stylesheets/style.css', encoding: 'utf8', contentType: 'text/css' },
        {name: '/images/special-delivery.jpg', location: 'images/special-delivery.jpg', encoding: '', contentType: 'image/*' },
        {name: '/images/newport.jpg', location: './images/newport.jpg', encoding: '', contentType: 'image/*' }   
    ];

    for(let i = 0; i < requests.length; i++){
        if(request.url === requests[i].name){
            console.log('location:', requests[i].location);
            fs.readFile(requests[i].location, requests[i].encoding, function(errors, contents){
                response.writeHead(200, {'Content-Type' : requests[i].contentType});                
                response.write(contents);
                response.end();
            });
        }
    }
    
});

//tell your server which port to run on
server.listen(7890);

//print to terminal window
console.log('Running in localhost 7890');