class Users
{
    index(req, res)
    {
        res.render('index');
    }
}

module.exports = new Users();