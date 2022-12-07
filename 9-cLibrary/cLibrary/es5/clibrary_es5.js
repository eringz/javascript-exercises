function Circles(size)
{
    var count = size;
    var diameter = 50;
    var top = 0;
    var left = 0; 
    var opacity = 5;
    var borderRadius = 100;


    this.draw_circles = function(element){
        this.canvas = document.getElementById(element);
        for(let i = 0; i<count; i++){

            //INITIALIZE RANDOM POSITIONS OF CIRCLES
            top = Math.floor(Math.random()*700 + 20);
            left = Math.floor(Math.random()*1500 + 20);

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
            this.circle.style.top = top+"px";
            this.circle.style.left = left+"px";
            this.circle.style.width = diameter+"px";
            this.circle.style.height = diameter+"px";
            this.circle.style.border = "1px solid white";
            this.circle.style.borderRadius = borderRadius+"px";
            this.circle.style.boxShadow = "5px 10px 15px lightblue";
            this.circle.style.opacity = opacity;

            this.canvas.appendChild(this.circle);
        }
    }
}





