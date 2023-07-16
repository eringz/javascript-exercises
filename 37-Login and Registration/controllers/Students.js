const { password } = require('../config/db');
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');

/**
 * DOCU: Create a Students class as Students Controller.
 * DEVELOPER: Ron Garcia Santos
 */
class Students
{
    /**
     * DOCU: This method renders the index page or login page.
     * DEVELOPER: Ron Garcia Santos
     * @param {*} req 
     * @param {*} res 
     */
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

    /**
     * DOCU: This method renders the login page when user clicks login link with errors as a parameter.
     * DEVELOPER: Ron Garcia Santos
     * @param {*} req 
     * @param {*} res 
     */
    async login(req, res)
    {
        res.render('login', {errors: {
            email: (req.session.errorEmail) && req.session.errorEmail,
            password: (req.session.errorPassword) && req.session.errorPassword
        }});
    }

    /**
     * DOCU: This method renders register page when user clicks register link with errors as a paramater.
     * DEVELOPER: Ron Garcia Santos
     * @param {*} req 
     * @param {*} res 
     */
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

    /**
     * DOCU: This method process registration with user's input as parameters.
     * DEVELOPER: Ron Garcia Santos
     * @param {*} req 
     * @param {*} res 
     */
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
                            const newStudent = Student.create(req.body);
                            res.redirect('/login');
                        }
                    });
                }
                else
                {
                    req.session.errorFirstName = result.firstName;
                    req.session.errorLastName = result.lastName;
                    req.session.errorEmail = result.email;
                    req.session.errorPassword = result.password;
                    res.redirect('/register');
                }
            })
            .catch((err) => {
                console.log('err', err);
            });
    }

    /**
     * DOCU: This method process login with user's input as parameters.
     * DEVELOPER: Ron Garcia Santos
     * @param {*} req 
     * @param {*} res 
     */
    async loginProcess(req, res)
    {
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        const validation = Student.loginValidation(req.body)
        .then((result) => {
            if(result === undefined)
            {
                const student = Student.getStudentByEmail(email, (err, results) => {
                    if(err) throw err;

                    if(!results[0] || !bcrypt.compareSync(req.body.password, results[0].password))
                    {
                        req.session.errorEmail = 'Authorization does not match!';
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

    /**
     * DOCU: This method clears all sessions and redirect to a login page.
     * DEVELOPER: Ron Garcia Santos
     * @param {*} req 
     * @param {*} res 
     */
    async logout(req, res)
    {
        req.session.destroy();
        res.redirect('/login');
    }
}

module.exports = new Students();