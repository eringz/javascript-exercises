module.exports = function(request, response){
    const fs = require('fs');
    
    //1. dynamic directory
    const path = require('path');

    if(request.url === '/')
    {
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css')
    {
        fs.readFile('stylesheets/style.css', 'utf8',function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/movies')
    {
        fs.readFile('views/movies.html', 'utf8',function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/theaters')
    {
        fs.readFile('views/theaters.html', 'utf8',function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/special-delivery.jpg')
    {
        fs.readFile('images/special-delivery.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type':'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/onepiece.png')
    {
        fs.readFile('images/onepiece.png', function(errors, contents){
            response.writeHead(200, {'Content-Type':'image/*'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/add_movie')
    {
        fs.readFile('views/add_movie.html','utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }

        
}


