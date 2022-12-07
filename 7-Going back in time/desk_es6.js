//Use ES6 Class syntax
class Desk
{
    //Setting in constructor initial properties and attribures of Desk.
    constructor(name){
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.color = "black";
    }
    
    /*
        Creating methods of Desk 
    */

    //Method for Desk's movement
    mov(x, y){
        this.x = x;
        this.y = y;
    }

    //Method for updating Desk's color
    updateColor(new_color){
        this.color = new_color;
    }  
}

//Creating instances for Desk
let desk1 = new Desk("oak desk");
let desk2 = new Desk("maple desk");

//Updating color of Desk1 
desk1.updateColor("brown");

console.log(desk1, desk2);