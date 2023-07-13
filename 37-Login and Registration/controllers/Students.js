
class Students
{
    async index(req, res)
    {
        console.log(req.session);
        // if(!req.session.id)
        // {
        //     res.render('index');
        // }
        // else
        // {
        //     res.render('login');
        // }
        // req.session.id = 1;
        // console.log(req.session.id);
        res.render('index');
    }

    async login(req, res)
    {
        res.render('login');
    }

    async register(req, res)
    {
        res.render('register');
    }

    async logout(req, res)
    {
        
        res.redirect('/login');
    }
}

module.exports = new Students();