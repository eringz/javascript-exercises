//Create a function for delay
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));  
}

//Create a function for generating a random number
let count = 0;
(async function EmitRandomNumber(){
    count++;
    console.log(`Attempt #${count}. EmitRandomNumber is called.`);
    console.log(`2 seconds have lapsed.`);
    let num = Math.floor(Math.random()*100);

    //Setting condition and limitation of attempts
    if(num > 80 || count > 10){
        console.log(`Random number generated is ${num}!!!.`);
        return;
    }else{
        console.log(`Random number generated is ${num}.`);
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - `);
        await delay(2000);
        return EmitRandomNumber();  
    }
    
}());
