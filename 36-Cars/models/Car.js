const mysql = require('mysql');
const db = require('../config/db');

/**
 * Creates connection in mysql database.
 * DEVELOPER: Ron Garcia Santos
 */
const connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
});

connection.connect();

class Car
{
    /**
     *  This method invoke all cars data from mysql. 
     * @param {*} callback 
     * DEVELOPER: Ron Garcia Santos
     */
    getCars(callback)
    {
        connection.query('SELECT * FROM cars', callback);
    }
}

module.exports = new Car();