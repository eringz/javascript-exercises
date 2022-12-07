class Circles
{
    constructor(size){
        this.count = size;
        this.diameter = 50;
        this.top = 0;
        this.left = 0; 
        this.opacity = 1;
        this.borderRadius = 100;
    }
      
    draw_circles(element){
        this.canvas = document.getElementById(element);
        for(let i = 0; i<this.count; i++){

            //INITIALIZE RANDOM POSITIONS OF CIRCLES
            this.top = Math.floor(Math.random()*700 + 20);
            this.left = Math.floor(Math.random()*1500 + 20);

            //CREATING CIRCLES
            this.circle = document.createElement("p");

            //SETTING RED, GREEN AND BLUE COLORS OF CIRCLES
            if(i <= 33 ){
                this.circle.style.background = "red";
            }else if(i> 33 && i < 67){
                this.circle.style.background = "green";
            }else{
                this.circle.style.background = "blue";
            }

            //SETTING PROPERTIES AND ATTRIBUTES
            this.circle.style.position = "absolute";
            this.circle.style.top = this.top+"px";
            this.circle.style.left = this.left+"px";
            this.circle.style.width = this.diameter+"px";
            this.circle.style.height = this.diameter+"px";
            this.circle.style.border = "1px solid white";
            this.circle.style.borderRadius = this.borderRadius+"px";
            this.circle.style.boxShadow = "5px 10px 15px lightblue";
            this.circle.style.opacity = this.opacity;

            this.canvas.appendChild(this.circle);
        }       
    }
}









