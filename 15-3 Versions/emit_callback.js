let count = 0;
let time_out = setInterval(function(){
    count++;

    console.log(`Attempt #${count}. EmitRandomNumber is called.`);
    console.log(`2 seconds have lapsed.`);

    //Call a random generating function and store it as num variable
    let num = EmitRandomNumber();

    //Set conditions for Interval
    if(num > 80 || count == 10){
        console.log(`Random number generated is ${num}!!!`);
        clearInterval(time_out);
    }else{
        console.log(`Random number generated is ${num}.`);
    } 
    console.log(`- - - - - - - - - - - - - - - - - - - - - - - - `);
    
},2000);

// Creating a function for generating a random number
function EmitRandomNumber(){
        let num = Math.floor(Math.random()* 100);
        return num;
}

