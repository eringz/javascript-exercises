class Player
{
    constructor(){
        this.x = 50;
        this.y = 90
        this.movement();
    }
    display(){
        document.getElementById('hero').style['top'] = this.y + "%";
        document.getElementById('hero').style['left'] = this.x + "%";
    }
    movement(hero){
        document.onkeydown = (e) => {
            var audio = document.getElementById('main_audio');
            audio.play();
            if(e.keyCode == 38){
                if(this.y > 7){   
                    this.y -= 1;
                }
                
            }else if(e.keyCode == 40){
                if(this.y < 94.5){
                    this.y += 1;
                }
            }else if(e.keyCode == 37){
                if(this.x > 1){
                    this.x -= 1;
                }
            }else if(e.keyCode == 39){
                if(this.x < 94.5){
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
        
    }

}

