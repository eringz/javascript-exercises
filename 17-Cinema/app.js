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

    //Routing configuration
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if(request.url == '/movies'){
        fs.readFile('views/movies.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if(request.url == '/theaters'){
        fs.readFile('views/theaters.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        })
    }else if(request.url == '/movies/new'){
        fs.readFile('views/add_movie.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if(request.url == '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }else if(request.url == '/images/special-delivery.jpg'){
        fs.readFile('./images/special-delivery.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else if(request.url == '/images/newport.jpg'){
        fs.readFile('./images/newport.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else{
        response.writeHead(404);
        response.end('404 Not Found!')
    }
    
});

//tell your server which port to run on
server.listen(7890);

//print to terminal window
console.log('Running in localhost 7890');