// Creating a new class called Bike with the following properties and atrributes of pric, max_speed and miles
class Bike
{

    /* 
        Now add a constructor method to the class (if using ES6) and require the user to specify the price and max_speed of each instance. 
        In the constructor also specify in the code so that the initial miles is set to be 0 whenever a new instance is created.
    */
    constructor(price, max_speed)
    {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;  
    }

    //Creating a method display of the bike's price, maximum speed, and the total miles driven.
    displayInfo()
    {
        console.log("Price:",this.price, "pesos");
        console.log("Maximum speed:", this.max_speed, "km/h");
        console.log("Miles driven:", this.miles);
        console.log("\n");
    }

    //Creating a method of display "Driving" on the screen and increase the total miles driven by 10.
    drive()
    {
        console.log("Driving");
        this.miles += 10;
    }
    
    //Creating a method of display "Reversing" on the screen and decrease the total miles driven by 5.
    reverse()
    {
        if(this.miles > 0)
        {
            console.log("Reversing");
            this.miles -= 5;
        }else{
            console.log("Cannot do a reverse");
        }
    }
}

//Create 3 instances of this bike.
let bike1 = new Bike(5000,351);
let bike2 = new Bike(7000, 365);
let bike3 = new Bike(12000, 400);

//Have the first instance drive three times, reverse once, and have it displayInfo(). 
console.log("First bike");
bike1.drive();
bike1.drive();
bike1.drive();
bike1.reverse();
bike1.displayInfo();

//Have the second instance drive twice, reverse twice, and have it displayInfo(). 
console.log("Second bike");
bike2.drive();
bike2.drive();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();

/*
    Have the third instance reverse three times and displayInfo().
    What would you do to prevent the instance from having negative miles?
*/
console.log("Third bike");
bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();


