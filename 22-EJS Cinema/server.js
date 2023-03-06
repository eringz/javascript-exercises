var express = require('express');
const app = express();


let requests = [
    {name: '/movies', location: '/views/movies'},
    {name: '/theaters', location: '/views/theaters'},
    {name: '/movies/new', location: '/views/add_movie'},
    
];

// let image_requests = [
//     {name: '/images/special-delivery.jpg', location: '/images/special-delivery.jpg'},
//     {name: '/images/onepiece.png', location: '/images/onepiece.png'},
//     {name: '/images/newport.jpg', location: '/images/newport.jpg'},
//     {name: '/images/leyte.gif', location: '/images/leyte.gif'}
// ];

app.use(express.static(__dirname+'/static'));
// app.use('/style.css',express.static(__dirname+'/static/style.css'));


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

//render files in each pages
for(let i=0; i<requests.length; i++){
    app.get(requests[i].name, function(request,response){
        // console.log('url request',request.url);
        if(request.url === requests[i].name){
            response.render(__dirname + requests[i].location);
        }
    });
}
    

app.listen(8000, function(){
    console.log('listening to port 8000');
});