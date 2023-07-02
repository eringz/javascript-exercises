/**
    * Description: User controller class
    * Developer: Ron Garcia Santos 
*/
class Users 
{
    constructor(){

    }

    //User index method that render index.ejs
    index(req, res)
    {
        res.render('index');
    }

    //User process method that process the user's input
    result(req, res)
    {
        const { name, location, language, comment} = req.body;
        let errors = [];
        errors.count = 0;

        if(name === '')
        {
            errors.name = 'Please Enter your name';
            errors.count++;
        }

        if(location === '')
        {
            errors.location = 'Please Enter the location';
            errors.count++;
        }

        if(language === '')
        {
            errors.language = 'Please Enter your favorite programming language';
            errors.count++;
        }

        if(comment === '')
        {
            errors.comment = 'Please Enter your comment';
            errors.count++;
        }

        if(errors.count > 0)
        {
            res.redirect('/');
        }
        else
        {
            res.render('result', {user: req.body});
        } 
    }
}

const users = new Users();
module.exports = users;