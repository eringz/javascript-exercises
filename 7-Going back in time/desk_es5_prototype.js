//Use ES5 Syntax but this time using prototype to add methods
function Desk(name)
{
    //Setting properties and attributes of Desk
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.color = "black";
}

/*
    Creating methods of Desk by prototyping
*/

//Method for Desk's movement
Desk.prototype.mov = function(x, y){
    this.x = x;
    this.y = y;
}

//Method for updating Desk's color
Desk.prototype.updateColor = function(new_color){
    this.color = new_color;
}

//Creating instances for Desk
let desk1 = new Desk("oak desk");
let desk2 = new Desk("maple desk");

//Updating color of Desk1 
desk1.updateColor("brown");

console.log(desk1, desk2);