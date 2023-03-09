const express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
var session = require('express-session');

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

app.get('/platform',function(req, res){
    req.session.page = 1;
    res.render('platform');
});

app.get('/exchange',function(req, res){
    req.session.page = 1;
    res.render('exchange');
});


app.get('/previous', function(req, res){
    if(req.session.page > 1){
        console.log(req.session.page);
        req.session.page -= 1;
        let url = "https://api.coingecko.com/api/v3/exchanges?page="+req.session.page+"&per_page=10";
        axios.get(url)
        .then(data => {
            res.json(data.data);
        })
        .catch(error => {
            res.json(error);
        });
    }
});

app.get('/top', function(req, res){
    req.session.page = 1;
    let url = "https://api.coingecko.com/api/v3/exchanges?page=1&per_page=100";
    axios.get(url)
    .then(data => {
        res.json(data.data);
    })
    .catch(error => {
        res.json(error);
    })
});

app.get('/next', function(req, res){
    req.session.page += 1;
    console.log(req.session.page);
    let url = "https://api.coingecko.com/api/v3/exchanges?page="+req.session.page+"&per_page=10";
    axios.get(url)
    .then(data => {
        res.json(data.data);
    })
    .catch(error => {
        res.json(error);
    })
});

app.listen(port = 8000, function(){
    console.log('Running in localhost at port'+port);
});

