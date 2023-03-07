const express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
const axios = require('axios');

const app = express();
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req, res){
    req.session.page = 1;
    res.render('index');
});

app.get('/next', function(req, res){
    console.log(req.session.page);
    req.session.page += 1;
    let url = "https://api.coingecko.com/api/v3/exchanges?page="+req.session.page+"&per_page=10";
    // console.log(req.url);
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(url)
    .then(data => {
        // log the data before moving on! 
        // console.log(data);
        // rather than rendering, just send back the json data!
        res.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        // console.log(error);
        res.json('error ko '+error);
    })
});

app.get('/previous', function(req, res){
    console.log(req.session.page);
    req.session.page -= 1;
    let url = "https://api.coingecko.com/api/v3/exchanges?page="+req.session.page+"&per_page=10";
    // console.log(req.url);
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(url)
    .then(data => {
        // log the data before moving on! 
        // console.log(data);
        // rather than rendering, just send back the json data!
        res.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        // console.log(error);
        res.json('error ko '+error);
    })
});

app.get('/top', function(req, res){
    // console.log(req.session.page);
    // req.session.page -= 1;
    // let url = "https://api.coingecko.com/api/v3/exchanges?page="+req.session.page+"&per_page=100";
    let url = "https://api.coingecko.com/api/v3/exchanges?page=1&per_page=100";
    // console.log(req.url);
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(url)
    .then(data => {
        // log the data before moving on! 
        // console.log(data);
        // rather than rendering, just send back the json data!
        res.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        // console.log(error);
        res.json('error ko '+error);
    })
});

app.listen(port = 8000, function(){
    console.log('Running in localhost at port', port);
});

