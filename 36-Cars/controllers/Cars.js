const Car = require('../models/Car');  

class Cars 
{
    /**
     * This car method will provide count per visits of index page.
     * Getting mysql results provided by model such as cars and its total count to render in index page.            
     * @param {*} req 
     * @param {*} res 
     * DEVELOPER: Ron Garcia Santos
     */
    async index(req, res)
    {
        if(req.session.visit)
        {
            req.session.visit++
        }
        else
        {
            req.session.visit = 1;
        }

        await Car.getCars((err, results) => {
            let count = 0;
            let cars = [];
            for(let i = 0; i < results.length; i++)
            {
                cars.push({name: results[i].name, year: results[i].year});
                count++
            }
            res.render('index', {visit: req.session.visit, count: count, cars: cars});
        });
    }

    /**
     * This method triggers the reset that set the visit count as 0.
     * @param {*} req 
     * @param {*} res 
     * DEVELOPER: Ron Garcia Santos
     */
    reset(req, res)
    {
        req.session.visit = 0;
        res.redirect('/');
    }
}

module.exports = new Cars();