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
 
class Student
{
    async registrationValidation(student)
    {
        console.log(`student validation`, student);
        let errors = [];
        errors.count = 0;

        /**
            * DOCU: Validating First Name of student's input.
            * DEVELOPER: Ron Garcia Santos
        */
        if(student.firstName === '')
        {
            errors.firstName = `First Name is required.`;
            errors.count++;
        }
        else if(student.firstName.length < 2)
        {
            errors.firstName = `First Name should at least has 2 or more characters.`;
            errors.count++
        }

        /**
            * DOCU: Validating Last Name of student's input.
            * DEVELOPER: Ron Garcia Santos 
        */
        if(student.lastName === '')
        {
            errors.lastName = `Last Name is required`;
            errors.count++;
        }
        else if(student.lastName.length < 2)
        {
            errors.lastName = `Last Name should at least has 2 or more characters.`;
            errors.count++;
        }

        /**
            * DOCU: Validating Email Address of student's input.
            * DEVELOPER: Ron Garcia Santos 
        */
        let emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com|@asg.com|@dpf.com/;
        if(student.email === '')
        {
            errors.email = `Email Address is required.`;
            errors.count++;
        }
        else if(!emailRegex.test(student.email))
        {
            errors.email = `Email Address is invalid`;
            errors.count++;
        }

        /**
            * DOCU: Validating Password and Confirm Password of student's input.
            * DEVELOPER: Ron Garcia SAntos 
        */
        if(student.password === '')
        {
            errors.password = `Password is required`;
            errors.count++;
        }
        else if(student.password.length < 8)
        {
            errors.password = `Password should at least has 8 or more characters.`;
            errors.count++;
        }
        else if(student.password !== student.confirmPassword)
        {
            errors.password = `Password and Confirm Password should match.`;
            errors.count++;
        }

        /**
            * DOCU: Creating a condition of returning errors when there is an existing errors.
            * DEVELOPER: Ron Garcia Santos
        */
        if(errors.count > 0)
        {
            return errors;
        }
    }

    async getStudentByEmail(email)
    {
        await connection.query(`SELECT * FROM students WHERE email=${email}`, (err, rows, fields) => {
            if(err) throw err
            console.log(rows[0]);
        } )
    }
}

module.exports = new Student();