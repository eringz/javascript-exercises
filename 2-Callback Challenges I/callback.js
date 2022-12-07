/*
    Create a function called foreach where the following code would work 
*/
let result = foreach([1,2,3,4,5], function(num){ return num*2;});
console.log(result); // this should log[2,4,6,8,10];
//
result = foreach([1,2,3,"v88", "training"], function(val){if(typeof(val) == "number"){return 0;}else{return val;}});
console.log(result); // this should log [0,0,0,"v88", "training"]
//
result = foreach([1,2,3,"hello"], function(val){return typeof(val);});
console.log(result); // this should log ["number", "number", "number", "string"]

// Creating a function for 
function foreach(array, process){
    for(var i = 0; i<array.length; i++){
        array[i] = process(array[i]);
    }
    return array;
}

/*
    Create a function called filter where it filters out any value in the array 
    that doesn't meet the condition as specified in the callback function. 
*/
result = filter([1,2,3,4,15], function(val){return val<10;}  ); //this filter each value in the array and only allows values that is less than 10
console.log(result); // this should log [1,2,3,4]
//
result = filter([1,2,3,4,5], function(val){return val<3;}) // this filter each value in the array and only all that is less than 3
console.log(result); // this should log [1,2];

// Creating a function for filtering values 
function filter(array, process){
    var temp = [];
    for(var i = 0; i<array.length; i++){
        if(process(array[i]) == true){
            temp.push(array[i]);
        }
    }
    return temp;
}

/*
    Create a function called reject that acts the opposite of the filter function.  
    For example, have it reject any value in the array that meets the requirement
    specified in the callback function.  For example,
*/
result = reject([1,2,3,4,15], function(val){return val<10}); // rejects any value that is less than 10
console.log(result); // this should log[15]
result = reject([1,2,3,4,15], function(val){return val<3}); // rejects any value that is less than 3
console.log(result); // this should log[3,4,15]

// Creating function a for reject values
function reject(array, process){
    var temp = [];
    for(var i = 0; i<array.length; i++){
        if(process(array[i]) == false){
            temp.push(array[i]);
        }
    }
    return temp;
}
