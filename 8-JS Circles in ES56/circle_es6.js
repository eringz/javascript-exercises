class Circle
{
    constructor(){
        this.color = "green";
        this.diameter = 0;
        this.radius = 100+"px"; 
    }
    
    //Update color;
    update_color(new_color){
        this.color = new_color
    }

    //Update diameter
    update_diameter(new_diameter){
        this.diameter = new_diameter;
    }
    
}
