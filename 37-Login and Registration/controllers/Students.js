const Student = require('../models/Student');
class Students
{
    async index(req, res)
    {
        
        if(req.session.userId)
        {
            res.render('index');
        }
        else
        {
            res.render('login');
        }
        console.log(req.session);
        res.render('index');
    }

    async login(req, res)
    {
        res.render('login');
    }

    async register(req, res)
    {
        console.log(`register: ${req.session.errors}`);
        res.render('register', {errors: req.session.errors});
    }

    async registrationProcess(req, res)
    {
        // console.log(req.body);
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        const validation = Student.registrationValidation(req.body)
            .then((result) => {
                if(result === undefined)
                {
                    //tobecontinued
                    res.redirect('/login');
                }
                else
                {
                    req.session.errors = result;
                    res.redirect('/register');
                }
            })
            .catch((err) => {
                console.log('err', err);
            });



        
    }

    async logout(req, res)
    {
        req.session.destroy();
        res.redirect('/login');
    }
}

module.exports = new Students();