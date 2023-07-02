function objectComparison(obj1, obj2){
    for(key in obj1) {
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

console.log(objectComparison({ name: "John", age: 34},{ name: "John", age: 34,}));
console.log(objectComparison({ name: "John", age: 34},{ name: "John", age: 35,}));


