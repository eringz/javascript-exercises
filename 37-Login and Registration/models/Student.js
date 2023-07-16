const mysql = require('mysql');
const db = require('../config/db');
const bcrypt = require('bcryptjs');

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

    async loginValidation(student)
    {
        let errors = [];
        errors.count = 0;

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

        /**
            * DOCU: Creating a condition of returning errors when there is an existing errors.
            * DEVELOPER: Ron Garcia Santos
        */
        if(errors.count > 0)
        {
            return errors;
        }
    }

    async getStudentById(id, callback)
    {
        await connection.query(`SELECT firstName, lastName, email FROM students WHERE id="${id}"`, callback);
    }

    async getStudentByEmail(email, callback)
    {
        await connection.query(`SELECT * FROM students WHERE email="${email}"`, callback);
    }

    async create(student)
    {
        const passwordHash = bcrypt.hashSync(student.password, 10);
        await connection.query(`INSERT INTO students(firstName, lastName, email, password, createdAt) VALUES('${student.firstName}', '${student.lastName}', '${student.email}', '${passwordHash}', NOW())`);
    }
    
    async login(student, callback)
    {
        await connection.query(`SELECT * FROM students WHERE email="${student.email}"`, callback);
    }
}

module.exports = new Student();