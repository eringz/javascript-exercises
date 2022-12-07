//Create a function EmitRandomNumber for generating a random number
function EmitRandomNumber(){
    return new Promise((resolve, reject) =>{
        let num = Math.floor(Math.random()*100);
        if(num <80){
            reject(num);
        }else{
            resolve(num);  
        }
    });
}

let count = 0;
const interval = setInterval(function(){
    count++
    if(count > 10){
        clearInterval(interval);
    }else{
        console.log(`Attemp#${count}. EmitRandomNumber is called`);
        console.log(`2 seconds have lapsed`);

        //Call a random number generator function 
        EmitRandomNumber()
            .then((num)=>{
                console.log(`Random number generated is ${num}!!!`);
                clearInterval(interval);
            })
            .catch((err)=>{
                console.log(`Random number generated is ${err}.`);
                console.log(`- - - - - - - - - - - - - - - - - - - - - - - - `);
            }) 
    }
}, 2000);


