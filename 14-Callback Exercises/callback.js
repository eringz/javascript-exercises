//1
function print(num,callback){
    let call = callback(num);
    console.log(call);
}


print(8,function(num){
    return num + 1;
});

//2
function math(){
    function add(num){
        return num + 100;
    }
    return add;
}

let result = math();
console.log(result(100));

//3
(function random(result, callback1, callback2){
    result = Math.floor(Math.random()*2);
    callback1 = function(){
        return 'Good morning';
    }
    callback2 = function(){
        return 'Good night';
    }

    if(result == 1){
        console.log(callback2()) ;
    }else{
        console.log(callback1())
    }
}());

