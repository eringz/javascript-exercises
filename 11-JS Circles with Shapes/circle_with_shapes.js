class Shape
{
    constructor(color){
        this.color = color;
        this.shape = "";
        this.width = 1;
        this.height = 1;
        this.radius = 100; 
    }
    
    //UPDATE COLOR METHOD
    update_color(new_color){
        this.color = new_color
    }
    
    //UPDATE SHAPE METHOD
    update_shape(new_shape){
        this.shape = new_shape;
    }

    //CREATING SHAPE METHOD
    draw(element,top,left){

        //INITIALIZING CORRESPONDING PROPERTIES WHEN CLICKED
        let diameter = Math.floor(Math.random()*200 +10);
        let width = this.width * diameter;
        let height = this.height * diameter;

        //CREATE AN ELEMENT WITH ITS PROPERTIES AND ATTRIBUTES
        const p = document.createElement("p");
        p.style.top = ( top - (diameter/2))+"px";
        p.style.left = ( left - (diameter/2))+"px";
        p.style.position = "absolute";
        p.style.width = width+"px";  
        p.style.height = height+"px";
        p.style.border = "1px solid white";
        p.style.borderRadius = this.radius+"px";
        p.style.backgroundColor = this.color;
        element.appendChild(p);

        //SET AN INTERVAL FOR SHAPE SHRINK
        setInterval(function(){
            if(width < 10 || height<10){
                clearInterval(p);
                p.remove();
            }else if(p.style.opacity > 0){
                width -=(5 * this.width) ;
                height -= (5 * this.height);
                p.style.opacity -= .01;
                p.style.width =  width+"px";
                p.style.height = height+"px";
            }else{
                width -= 5;
                height -= 5;
                // p.style.opacity -= .01;
                p.style.width = width +"px";
                p.style.height = height+"px";
                p.style.boxShadow = "5px 10px 15px lightblue"
            }
        },100);

    }
    
}

//INSTANCE CIRCLE FROM SHAPE
class Circle extends Shape
{
    constructor(color){
        super(color)
        this.radius = 100;
        this.width = 1;
        this.height = 1;
    }
    
}

//INSTANCE RECTANGLE FROM SHAPE
class Rectangle extends Shape
{
    constructor(color){
        super(color)
        this.radius = 0;
        this.width = 2;
        this.height = 1;
    }
}

//INSTANCE SQUARE FROM SHAPE
class Square extends Shape
{
    constructor(color){
        super(color)
        this.radius = 0;
        this.width = 1;
        this.height = 1;
    }
}


