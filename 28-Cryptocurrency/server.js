const express = require('express');
const app = express();
const axios = require('axios');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('index');
});

app.post('/page',function(req, res){
    console.log(req.body);
    res.render('index', {})
});

app.post('/page', function(req, res){
    let url = "https://api.coingecko.com/api/v3/exchanges?page=2&per_page=10";
    // console.log(req.url);
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(url)
    .then(data => {
        // log the data before moving on! 
        console.log(data.data);
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

