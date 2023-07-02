/*
    Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h 
    Where r is the radius and h is the height of the cylinder.
*/

class Cylinder
{
    constructor(r , h){
        this.pi = Math.PI;
        this.r = r;
        this.h = h;
    }

    volume()
    {
        console.log(this.r * this.r );
        let volume = (this.pi * (this.r  *  this.r)) * this.h;
        console.log(Math.round(volume * 10000) / 10000);
    }
}

let cylinder = new Cylinder(5,20);
cylinder.volume();
