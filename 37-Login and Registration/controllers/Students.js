
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
        res.render('register');
    }

    async logout(req, res)
    {
        req.session.destroy();
        res.redirect('/login');
    }
}

module.exports = new Students();