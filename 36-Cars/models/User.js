const mysql = require('mysql');
const db = require('../config/db');

const connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
});

connection.connect();
// connection.query('SELECT * FROM cars', (err, rows, fields) => {
//     if(err) throw err;
//     console.log('The cars are:');
//     for(let i = 0; i < rows.length; i++)
//     {
//         console.log(`${rows[i].name} - ${rows[i].year}`)
//     }
// });

// const getCount = (callback) => {
//         connection.query('SELECT COUNT(id) AS count FROM cars', callback)
// }


class User
{
    getCount(callback)
    {
        connection.query('SELECT COUNT(id) AS count FROM cars', callback);
    }
}

module.exports = new User();