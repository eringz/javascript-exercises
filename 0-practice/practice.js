/*
     Create a small node server capable of handling the following request URLs:

     localhost:6543/    This route should serve a view file called welcome.html and display a welcome message.
     localhost:6543/village88    This route should serve a view file called village88.html and display information about Village 88.
     localhost:6543/training/new    This route should serve a view file called training.html 
          and have a form (don't worry about where the form should be submitted to).
     If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.

*/

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
     console.log('Client request URL:', request.url);
     path = '';
     let str = '';
     if(request.url === '/'){
          path = 'welcome.html'
          console.log(path);
     }else{
          str += request.url;
          path = str.slice(1)+'.html';
          console.log(path);
     }

     fs.readFile(path, 'utf8', function(errors, contents){
          response.writeHead(200, {'Content-Type':'text/html'});
          response.write(contents);
          response.end();
     });
     
     
});

server.listen(6543);
console.log('Running in localhost in port 6543');