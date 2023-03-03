/*
    What I want you to do is to come up with a program that gets each ninja to take a turn, 
        and to attack each other, for a total of 10 rounds.  
        When a ninja attacks, it should return a random number between 0 to the strength of that ninja.  
        For example, for ninja1, whenever attack method is invoked for ninja1, it should return a random number between 0 to 15.  
        For ninja2, the attack method should return a random number between 0 to 10.

    After each attack, your program should tell who attacked who and what the hp of each ninja is now.  
        After all 10 rounds of attack, announce who the winner is (based on who still has the higher hp).

    For example, once your program runs, it may display an output such as this:

    ===Round 1===
    Ninja1 attacks Ninja2 and does a damage of 9!   Ninja1 health: 100.  Ninja2 health: 142
    Ninja2 attacks Ninja1 and does a damage of 8!   Ninja1 health: 92.   Ninja2 health: 142
    ===Round 2===
    Ninja1 attacks Ninja2 and does a damage of 3!   Ninja1 health: 92.  Ninja2 health: 139
    Ninja2 attacks Ninja1 and does a damage of 10!  Ninja1 health: 82.  Ninja2 health: 139
    ...
    ...
    ...
    ===Round 10===
    Ninja1 attacks Ninja2 and does a damage of 13!  Ninja1 health: 35.  Ninja2 health: 48
    Ninja2 attacks Ninja1 and does a damage of 10!  Ninja1 health: 25.  Ninja2 health: 48
    Ninja2 WINS!!!!!
*/
var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function() {
       let damage = Math.round(Math.random()*this.strength);
       ninja2.hp -= damage;
       console.log('Ninja1 attacks Ninja2 and does a damage of ',damage,'! Ninja1 health:',this.hp,', Ninja2 health:',ninja2.hp);
    }
}

var ninja2 = {
    hp: 150,
    strength: 10,
    attack: function() {
        let damage = Math.round(Math.random()*this.strength);
        ninja1.hp -= damage;
        console.log('Ninja2 attacks Ninja1 and does a damage of ',damage,'! Ninja1 health:',ninja1.hp,', Ninja2 health:',this.hp);
    }
}

for(let i = 0; i < 10; i++){
    console.log('=== Round',i+1,'===');
    ninja1.attack();
    ninja2.attack();
    if(ninja1.hp > ninja2.hp){
        console.log('Ninja1 WINS!!!!!');
    }else{
        console.log('Ninja2 WINS!!!!!')
    }
}
