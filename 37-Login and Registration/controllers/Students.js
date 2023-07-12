class Students
{
    async index(req, res)
    {
        if(req.session.id)
        {
            res.render('index');
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

    async logout(req, res)
    {
        
        res.redirect('/login');
    }
}

module.exports = new Students();