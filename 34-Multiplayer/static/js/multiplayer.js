class Player
{
    constructor(players){
        this.players = players;
        this.bullets = [];
        this.movement();
        this.position = '-85px -180px';
    }
    display(){
        let output = '';
        for(let i=0; i<this.players.length; i++){
            output += `<div class='player' style='top:${this.players[i].y}px; left:${this.players[i].x}px'></div>`;
            document.getElementById('players').innerHTML = output;
        } 
        console.log(output);
    }
    movement(){
        document.onkeydown = (e) => {
            var audio = document.getElementById('main_audio');
            audio.play();
            for(let i=0; i<this.players.length; i++){
                if(e.keyCode == 38){
                    console.log(`player ${i+1} y:`,this.players[i].y);
                    if(this.players[i].y > 7){   
                        this.players[i].y -= 20;
                    }
                }else if(e.keyCode == 40){
                    if(this.players[i].y < 740){
                        this.players[i].y += 20;
                    }
                }else if(e.keyCode == 37){
                    if(this.players[i].x > 1){
                        this.players[i].x -= 20;
                    }
                }else if(e.keyCode == 39){
                    if(this.players[i].x < 720){
                        this.players[i].x += 20;
                    }
                }
                if(e.keyCode == 32){
                    var audio = document.getElementById("bullet_audio");
                    audio.play();
                    this.payers[i].bullets.push({x: this.x+5, y: this.y-12});
                }
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
    constructor(){
        this.enemies = [
            {x: 40, y: 10},
            {x: 120, y: 10},
            {x: 240, y: 10},
            {x: 380, y: 10},
            {x: 500, y: 10},
            {x: 600, y: 10},
            {x: 700, y: 10},
        ];
    }

    display(){
        let output = '';
        for(let i=0; i<this.enemies.length; i++){
            output += `<div class='enemy${i+1}' style='top:${this.enemies[i].y}px; left:${this.enemies[i].x}px'></div>`;
            document.getElementById('enemies').innerHTML = output;
        } 
    }

    
    movement(){
        for(let i=0; i<this.enemies.length; i++){
            this.enemies[i].y += 2;
            if(this.enemies[i].y > 740){
                this.enemies[i].y = 0;
                let new_xmap = Math.round(Math.random()*720);
                this.enemies[i].x = new_xmap - (new_xmap % 20);
            }
        }
        
        
    }
    
}


