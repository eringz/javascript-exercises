console.log('test');

class Me
{
    constructor()
    {
        this.name = 'ron'
    }

    displayMe()
    {
        console.log(`My name is ${this.name}`);
    }
}

const ron = new Me();

ron.displayMe();