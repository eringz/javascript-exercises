
/*
    Create a small node server capable of handling the following request URLs:

    localhost:6543/    This route should serve a view file called welcome.html and display a welcome message.

    localhost:6543/village88    This route should serve a view file called village88.html 
        and display information about Village 88.

    localhost:6543/training/new    This route should serve a view file called training.html 
        and have a form (don't worry about where the form should be submitted to).
        
    If the URL is anything other than the ones above, 
        have an error page load saying that the URL requested is not available.
*/


//get the http modulue:
var http = require('http');

//fs module allows us to read and write content for responses!!
var fs = require('fs');

//creating a server using http module:
var server = http.createServer(function(request, response){

    //see what URL the clients are requesting:
    console.log('client request URL: ', request.url);

    //this is how we do routing;
    if(request.url == '/'){
        fs.readFile('index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'}); // send data about response
            response.write(contents); // send reponse body
            response.end(); // finished!
        });
    }else if(request.url == '/village88'){
        fs.readFile('about.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'}); // send data about response
            response.write(contents); // send reponse body
            response.end(); // finished!
        });
    }else if(request.url == '/training/new'){
        fs.readFile('training.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html' });
            response.write(contents);
            response.end();
        })
    }else{ // request didn't match anything:
        response.writeHead(404);
        response.end('have an error page load saying that the URL requested is not available.');
    }
});

//tell your server which port to run on
server.listen(6543);

//print to terminal window
console.log('Running in localhost at port 6543');
