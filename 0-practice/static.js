module.exports = function(request,response){
    const fs = require('fs');
    const path = require('path');
    const file = 'views'+request.url;
    var file_path = '';
    
    function addExtension(file){
        let extension = path.extname(file);
        if(!extension){
            return '.html'
        }else{
            return '';
        }
    }
    
    function contentType(file){
        let extension = path.extname(file);
        if(extension == '.jpg' || extension == '.png' || extension == '.gif' ){
            return 'image/*';
        }else if(extension == '.css'){
            return 'text/css';
        }else{
            return 'text/html';
        }
    }

    function utf(file){
        let extension  = path.extname(file)
        if(extension == '.jpg' || extension == '.png' || extension == '.gif'){
            return '';
        }else{
            return 'utf8'
        }
    }

    console.log(file_path);

    if(request.url === '/'){
        file_path = 'views/index.html';
        console.log(file_path);
    }else{
        file_path = ''+file+addExtension(file);
    }

    fs.readFile(file_path, utf(file_path), function(error, contents){
        if(!contents){
            response.writeHead(404);
            response.end('404 Not Found!')
        }else{
            response.writeHead(200, {'Content-Type' : contentType(file_path)});
            response.write(contents);
            response.end();
        } 
    });
}


