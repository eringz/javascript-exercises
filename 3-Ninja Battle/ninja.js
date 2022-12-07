/*

  What I want you to do is to come up with a program that gets each ninja to take a turn, 
  and to attack each other, for a total of 10 rounds.  
  When a ninja attacks, it should return a random number between 0 to the strength of that ninja.  
  For example, for ninja1, whenever attack method is invoked for ninja1, 
  it should return a random number between 0 to 15.  
  For ninja2, the attack method should return a random number between 0 to 10.

  After each attack, your program should tell who attacked who and what the hp of each ninja is now.  
  After all 10 rounds of attack, announce who the winner is (based on who still has the higher hp).

*/
/*
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

// Object set for ninja1
var ninja1 = {
  hp: 100,
  strength: 15,
  attack: function() {
    damage = Math.floor(Math.random(0, this.strength)*this.strength);
    console.log("Ninja1 attacks Ninja2 and does a damage of", damage, "Ninja1 health:",this.hp," Ninja2 health:", ninja2.hp -= damage);
    return damage;
  }
}

// Object set for ninja2
var ninja2 = {
  hp: 150,
  strength: 10,
  attack: function() {
    damage = Math.floor(Math.random(0, this.strength)*this.strength);
    console.log("Ninja2 attacks Ninja1 and does a damage of", damage, "Ninja1 health:",ninja1.hp -= damage," Ninja2 health:", this.hp);
    return damage;
  }
}
var winning_ninja = "Ninja1";
for(var i = 0; i<10; i++){
  if(i + 1 == 10){
    if(ninja2.hp > ninja1.hp){
      winning_ninja = "Ninja2";
    }
    console.log(winning_ninja,"WINS!!!!!");
  }else{
    console.log(" === Round",i+1, "====");
    ninja1.attack();
    ninja2.attack();
  } 
}


