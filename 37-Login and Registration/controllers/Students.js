const Student = require('../models/Student');
const bcrypt = require('bcryptjs');

class Students
{
    async index(req, res)
    {
        
        if(req.session.userId)
        {
            const student = Student.getStudentById(req.session.userId, (err, results) => {
                if(err) throw err;
                console.log('index results:', results[0]);
                res.render('index', {student: results[0]} );
            });
           
            
        }
        else
        {
            res.render('login');
        }
    }

    async login(req, res)
    {
        res.render('login');
    }

    async register(req, res)
    {
        res.render('register');
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
                            console.log('email already exist');
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
                        req.session.userId = results[0].id;
                        res.redirect('/');
                    }
                });
            }
            else
            {
                console.log(result);
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