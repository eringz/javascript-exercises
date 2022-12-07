/*
    Have the server render views/index.ejs that has the form for the user to fill out
    The user fills out the form and submits
    The submitted form gets sent to /result
    The server recognizes when someone posts things to /result, grabs information from the POST, 
        and sends the POST data back as it renders views/results.ejs
*/
const express = require('express');
const body_parser = require('body-parser')
const app = express();

//
app.use(express.static('assets'));
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

//Set ejs in views
app.set('/views', __dirname + '/views');
app.set('view engine', 'ejs');

//Routing index in views folder
app.get('/', function(request, response){
    response.render('index');
});

//Pass the data from index to result file using post method
app.post('/result', function(request, response){
    var information = {
        name: request.body.name,
        course: request.body.course,
        score: request.body.score,
        reason: request.body.reason
    }
    response.render('result',{user: information});
});

//Set localhost to 8000
app.listen(8000, function(){
    console.log('Listening to port 8000');
});