//initializing variables using session and app
const express = require('express');
const session = require('express-session');
const app = express();

//Direct express of session configuration
app.use(session({
    secret: 'keyboardkitteh',   
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

//Direct express to find files in assets folder
app.use(express.static('assets'));

//view folder setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Displaying count and message if there is a visitor
app.get('/', function(request, response){
    if(request.session.count){
        request.session.count++;
    }else{
        request.session.count = 1
    }

    //create an object for count and message condition if count is even or odd
    let visitor = {
        count: request.session.count,
        message: (request.session.count %2 == 0) ? 'Even flowers need rain' : 'Beat the odds'
    }

    response.render('index', {display: visitor}  );

});

//Resetting the count of visitor
app.get('/reset', function(request, response){
    request.session.count = 0;
    response.redirect('/');
});

//Repeating the visitor
app.get('/repeat', function(request, response){
    request.session.count -=1;
    response.redirect('/');
});

//routing in localhost 8000
app.listen(8000, function(){
    console.log('Listening to port 8000');
});

