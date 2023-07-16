const { password } = require('../config/db');
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');

class Students
{
    async index(req, res)
    {
        
        if(req.session.studentId)
        {
            const student = Student.getStudentById(req.session.studentId, (err, results) => {
                if(err) throw err;
                console.log('index results:', results[0]);
                res.render('index', {student: results[0]} );
            });
           
            
        }
        else
        {
            res.render('login', {errors: {
                email: (req.session.errorEmail) && req.session.errorEmail,
                password: (req.session.errorPassword) && req.session.errorPassword
            }});
        }
    }

    async login(req, res)
    {
        res.render('login', {errors: {
            email: (req.session.errorEmail) && req.session.errorEmail,
            password: (req.session.errorPassword) && req.session.errorPassword
        }});
    }

    async register(req, res)
    {
        console.log('sessions:', req.session);
        res.render('register', {errors: {
            firstName: (req.session.errorFirstName) && req.session.errorFirstName,
            lastName: (req.session.errorLastName) && req.session.errorLastName,
            email: (req.session.errorEmail) && req.session.errorEmail,
            password: (req.session.errorPassword) && req.session.errorPassword
        }});

    }

    async registrationProcess(req, res)
    {
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        const validation = Student.registrationValidation(req.body)
            .then((result) => {
                if(result === undefined)
                {
                    const student = Student.getStudentByEmail(email, (err, results) => {
                        if(err) throw err;
                        if(results[0])
                        {
                            req.session.errorEmail = 'Email Adress is already exist';
                            res.redirect('/register');
                        }
                        else
                        {
                            console.log('we can make new student with this email');
                            const newStudent = Student.create(req.body);
                            res.redirect('/login');
                        }
                    });
                }
                else
                {
                    req.session.errorFirstName = result.firstName;
                    req.session.errorLastName = result.lastName;
                    req.session.email = result.email;
                    req.session.password = result.password;
                    res.redirect('/register');
                }
            })
            .catch((err) => {
                console.log('err', err);
            });
    }

    async loginProcess(req, res)
    {
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        const validation = Student.loginValidation(req.body)
        .then((result) => {
            if(result === undefined)
            {
                const student = Student.login(req.body, (err, results) => {
                    if(err) throw err;

                    if(!results[0] || !bcrypt.compareSync(req.body.password, results[0].password))
                    {
                        res.redirect('/login');
                    }
                    else
                    {
                        req.session.studentId = results[0].id;
                        res.redirect('/');
                    }
                });
            }
            else
            {
                req.session.errorEmail = result.email;
                req.session.errorPassword = result.password
                res.redirect('/login');
            }
        })
        .catch((err) => {
            console.log('err', err);
        })

    }

    async logout(req, res)
    {
        req.session.destroy();
        res.redirect('/login');
    }
}

module.exports = new Students();