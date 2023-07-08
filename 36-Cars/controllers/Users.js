const User = require('../models/User');  

class Users 
{

    index(req, res)
    {
        if(req.session.visit)
        {
            req.session.visit++
        }
        else
        {
            req.session.visit = 1;
        }

        User.getCount((err, results) => {
            if (err) {
              console.error(err);
              res.sendStatus(500);
            } else {
              console.log(results[0].count);
              req.session.count = results[0].count;
            }
        });
        


        res.render('index', {visit: req.session.visit, count: req.session.count});
    }
}

module.exports = new Users();