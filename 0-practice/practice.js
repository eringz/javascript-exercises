let str = '/images/special-delivery.jpg';

console.log(str.length);
let ext = '';
let num = 0;
for(let i=0; i<str.length; i++){
    console.log(`${i}:`,str[i]);
    if(str[i] == '.'){
        num = i;
    }
}

//for extension
for(let j=num; j<str.length; j++){
    ext += str[j];
}

console.log('start at',num);
console.log('extension:',ext);

//for 
