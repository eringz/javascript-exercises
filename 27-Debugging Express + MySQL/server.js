/*
    In server.js file, make sure you change the MySQL credentials to your own credentials to make this app work.
        The Express app we provided can connect to a database, 
        can execute mysql queries, and retrieve data from the database. 
        This simple app is working on a simple Login feature.

But here's the problem:

    When we try to debug our code using console.log() to see how our code are executed, 
        It's unable to wait for "Step 2" and just proceeds to "Step 3". 
        The current ordering is: "Step 1", "Step 3", & "Step 2". 
        Please fix this so that the console.log() prints out the steps in correct order 
        which is: Step 1, Step 2, and Step 3.

    Right now, we can only console.log() the result variable inside the executeQuery() function. 
        We want to console.log() the result variable inside the app.post function. 
        Use callback, async/await, and promises to be able to solve this problem.
*/

var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + "/static" ));
app.use(session({
    secret: 'user',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

/** MYSQL Connection **/
const Mysql         = require('mysql');
var connection      = Mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "village88",
    "port": 3306
});
connection.connect(function(err) {
    if (err) throw err;
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

/** Basic Execute Query function **/
function executeQuery(query) {
    connection.query( query, function (err, result) {
        console.log("STEP 2: ", result);
    });	
}

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/login", function(req,res) {
    let email = req.body['email'];
    let password = req.body['password'];

    let get_user_query 		= Mysql.format(`
        SELECT users.id, users.first_name, users.email, users.password
        FROM users
        WHERE users.email = ? AND users.password = ? LIMIT 1;`, [email, password]
    );

    /** 
     * Using callback, async/await, and promises,
     * find a way so that you can console.log
     * the result variable here instead of doing the console.log
     * in the connection.query() function.
     * Make sure after making the changes, that the res.redirect('/') still works.
    **/

    /** 
     * When you try this out now, you should see that the ordering of processes are off.
     * It reads STEP 1 first, then skips to STEP 3, then back to STEP 2. Why is that?
     * Please fix the ordering to Step 1, Step 2, & Step 3.
     * Make sure you solve this using: Callback, Async/Await, and Promises.
    **/    
//You can add codes in between but do not re-arrange the order of codes in line 67-69 in server.js,
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    
(async function print(){
    console.log("STEP 1");
    executeQuery(get_user_query);
    await delay(2000);
    console.log("STEP 3");
}());
    
// You can add codes in between but do not re-arrange the order of codes in line 67-69 in server.js,   
    res.redirect('/');
});

app.listen(8000, function(){
    console.log("Listening on port: 8000");
});
