class Config 
{
    constructor()
    {
        this.port = 8080;
        this.author = 'Ron Garcia Santos'
        this.session = {
            secret: 'keyboardkitteh',
            resave: false,
            saveUninitialized: true,
            cookie: {maxAge: 6000}
        }
    }
}

module.exports = new Config();