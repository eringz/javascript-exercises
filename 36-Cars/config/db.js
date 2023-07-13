class Database
{
    constructor()
    {
        this.host = 'localhost';
        this.user = 'root';
        this.password = '';
        this.database = 'mvc';
    } 
}

module.exports = new Database();