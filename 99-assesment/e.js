//Write a JavaScript program to measure the time taken by a function to execute

function action(){
    let array = [];
    for(let i = 0; i< 100000; i++){
        array.push(i);
    }
    return array;
}

function timeTaken(){
    let start = new Date().getTime();
    console.log(action());
    let end = new Date().getTime();
    return end - start;
}

console.log(`time taken is ${timeTaken()}ms`);

