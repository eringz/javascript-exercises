class Game{
    constructor(enemy_num){
        this.enemy = [];
        for(let i=0; i<enemy_num; i++){
            this.enemy.push(new Enemy(i+1));
        }

    }
}



class Player
{
    constructor(x){
        this.x = x;
        this.y = 740;
        this.bullets = [];
        this.movement();
        this.position = '-85px -180px';
    }
    display(){
        document.getElementById('player').style['top'] = this.y + 'px';
        document.getElementById('player').style['left'] = this.x + 'px';
        document.getElementById('player').style.backgroundPosition = this.position;
    }
    movement(){
        document.onkeydown = (e) => {
            var audio = document.getElementById('main_audio');
            audio.play();
            if(e.keyCode == 38){
                if(this.y > 7){   
                    this.y -= 20;
                }
                
            }else if(e.keyCode == 40){
                if(this.y < 740){
                    this.y += 20;
                }
            }else if(e.keyCode == 37){
                if(this.x > 1){
                    this.x -= 20;
                }
            }else if(e.keyCode == 39){
                if(this.x < 720){
                    this.x += 20;
                }
            }
            if(e.keyCode == 32){
                var audio = document.getElementById("bullet_audio");
                audio.play();
                this.bullets.push({x: this.x+5, y: this.y-12});
            }
        }
        
    }
    fire(){
        var output  = "";
	    for(var i=0; i<this.bullets.length; i++){
		    output += "<div class='bullet' style='top:"+this.bullets[i].y+"px; left:"+this.bullets[i].x+"px;'></div>";
		}
		document.getElementById('bullets').innerHTML = output;
    }
    fireMovement(){
        for(var j=0; j<this.bullets.length; j++){
			this.bullets[j].y -= 2;
			
			if(this.bullets[j].y < 0){
				this.bullets[j] = this.bullets[this.bullets.length - 1];
				this.bullets.pop();
			}
		}
    }

}

class Enemy
{
    constructor(num){
        this.count = num;
        this.xmap = Math.round(Math.random()*720);
        this.x = this.xmap - (this.xmap % 20);
        this.y = 10;
        this.id = id;
    }
    display(){
        let output = '';
        for(let i=0; i<) 
        output += `<div class='enemy${this.id}' style='top:${this.y}px; left:${this.x}px'></div>`;
        document.getElementById('enemies').innerHTML = output;
    }
    movement(){
        this.y += 1;
        if(this.y > 740){
            this.y = 0;
            let new_xmap = Math.round(Math.random()*720);
			this.x = new_xmap - (new_xmap % 20);
        }
    }
    
}


