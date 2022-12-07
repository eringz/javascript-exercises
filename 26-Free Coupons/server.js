const express = require('express');
const session = require('express-session');
const body_parser = require('body-parser');

const app = express();

//Set session configuration
app.use(session({
    secret: 'keyboardkitteh',   
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

//
app.use(express.static('assets'));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

//set ejs in views
app.set('/views', __dirname + '/views');
app.set('view engine', 'ejs');

//
let count = 10;
let hide = false

//Routing index in views folder
app.get('/', function(request, response){
    let coupon = {
        count: count,
        number: Math.floor(Math.random()* 9999999) + 1000000,
        hide: hide
    }
    response.render('index', {coupon: coupon});
});

//processing coupon
app.post('/process', function(request, response){
    if(request.body.name != ''){   
        count -= 1;
        hide = true;
    }else{
        count = count;
    }
    response.redirect('/');
});

//Reset free coupon
app.post('/reset', function(request, response){
    count = 10;
    hide = false;
    response.redirect('/');
});

//claim free coupon again
app.post('/claim', function(request, response){
    if(count > 0){
        hide = false;
    }else{
        hide = true;
    }
    response.redirect('/');
});

//Set Localhost to 8000
app.listen(8000, function(){
    console.log('Listening to port 8000');
});
