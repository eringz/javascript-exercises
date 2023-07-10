class Users
{
    async index(req, res)
    {
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
}