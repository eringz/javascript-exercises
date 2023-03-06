/*
    DOCU: Importing the Express Framework and store it in app variable.
    OWNER: Ron Garcia Santos
*/
const express = require('express');
const app = express();


// Storing specific object per route
const d = new Date();
let month = d.getMonth()+1;
let day = d.getDate();
let year = d.getFullYear();
let date = `${month}/${day}/${year}`;

let awards = [
    {route: '/web-exam', course: 'Web Fundamentals', date: date, image: '/images/web-fundamental.png',  mentor: 'Michael Choi', technologies: ['HTML', 'CSS', 'JQuery', 'MySQL']},
    {route: '/php-exam', course: 'PHP Track', date: date, image: '/images/php-track.png', mentor: 'Karen Marie Igcasan', technologies: ['PHP', 'CodeIgniter', 'Ajax']},
    {route: '/js-exam', course: 'JS Track', date: date, image: '/images/js-track.png', mentor: 'Rogie Urriza', technologies: ['ES', 'Node', 'Express', 'Sockets']}
];

// 
app.use(express.static(__dirname+'/static'));

//
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

for(let i=0; i<awards.length; i++){
    app.get(awards[i].route, function(request, response){
        response.render('details', {award: awards[i]});
    });
}

app.listen(8000, function(){
    console.log('Listening in port 8000');
});

