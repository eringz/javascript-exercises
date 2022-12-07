const express = require('express');

const app = express();

app.use('/awards',express.static(__dirname+'/static/index.html'));
app.use('/stylesheet/style.css',express.static(__dirname+'/static/stylesheet/style.css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/web-exam', function(request, response){
    var award = {
        course: 'Web Fundamentals',
        date: new Date(),
        mentor: 'Karen Marie Igcasan',
        technologies: ['HTML', 'CSS', 'jQuery', 'MySql']
    };
    response.render('details', {award: award});
});

app.get('/php-exam', function(request, response){
    var award = {
        course: 'PHP Track',
        date: new Date(),
        mentor: 'Karen Marie Igcasan',
        technologies: ['PHP', 'CodeIgniter', 'Ajax']
    };
    response.render('details', {award: award});
});

app.get('/js-exam', function(request, response){
    var award = {
        course: 'JS Track',
        date: new Date(),
        mentor: 'Karen Marie Igcasan',
        technologies: ['ES6', 'Node', 'Express', 'Sockets']
    };
    response.render('details', {award: award});
});

app.listen(8000, function(){
    console.log('Listening in port 8000');
});

