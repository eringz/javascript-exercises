/**
    * models folder - put all of your model files here
    * views folder - put all of your view files here
    * controllers folder - put all of your controller files here
    * assets folder - have it host all of your scripts/stylesheets here
    * app.js - have this be the main file where starts the server
    * config.js - have this store configuration settings for your project including the database credentials
    * routes.js - have it contain the routing information
 */

/**
     * have app.js load the routes.js
     * have routes.js load the appropriate controllers
     * have the respective controller load the appropriate models
     * have the respective controller load the appropriate view file
 */

const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');

// app.use('views', __dirname + '/views');
app.use(express.static(__dirname + '/assets'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Routes
app.use('/', routes)

app.listen(config.port, function(){
    console.log('Running in localhost at port ' + config.port);
});

// app.get('/', function(req, res){
//     res.render('index');
// });