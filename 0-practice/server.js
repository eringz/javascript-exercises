const express = require('express')
const app = express();
const middleware =  require('./midlewares/Time');


app.use(middleware.time);
app.use(middleware.mid);



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})


app.listen(8080, () => {
    console.log('This server is running at port 8080');
})
