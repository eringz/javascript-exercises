function Circle()
{
    this.color = "green";
    this.diameter = 0;
    this.radius = 100+"px"; 

    //Update color;
    this.update_color = function(new_color){
        this.color = new_color
    }

    //Update diameter
    this.update_diameter = function(new_diameter){
        this.diameter = new_diameter;
    }
    
}


