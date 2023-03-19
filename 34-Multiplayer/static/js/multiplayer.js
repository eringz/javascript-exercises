class Hero
{
    constructor(){
        this.x = 50;
        this.y = 90
    }
    display(){
        document.getElementById('hero').style['top'] = this.y + "%";
        document.getElementById('hero').style['left'] = this.x + "%";
    }
    movement(hero){
        var y = this.y;
        document.onkeydown = function(e){
            if(e.keyCode == 38){
                if(y > 7){   
                    y -= 1;
                }
                console.log(y);
            }else if(e.keyCode == 40){
                if(hero.y < 94.5){
                    this.y += 1;
                }
            }else if(e.keyCode == 37){
                if(hero.x > 1){
                    this.x -= 1;
                }
            }else if(e.keyCode == 39){
                if(hero.x < 94.5){
                    this.x += 1;
                }
            }
            if(e.keyCode == 32){
                var audio = document.getElementById("bullet_audio");
                audio.play();
                bullets.push({x: hero.x+.75, y: hero.y-2});
                displayBullets();
            }
        }
        console.log(y);
    }

}


