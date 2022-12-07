//1
function print_str1(str){
    console.log(str);
}
print_str1("I love Javascript!!!");

//2
const print_str2 = function(str){
    console.log(str)
}
print_str2("I love Javascript!!!"); 

//3
(function print_str4(str){
    console.log(str);
}("I love Javascript!!!"));

//4
 (function print_str5(str){
    console.log(str)
}) ("I love Javascript!!!");

//5
class Print
{
    print_str3(str){
        console.log(str);
    }
}

const object = new Print();
object.print_str3("I love Javascript!!!");  


//6
const obj = {
    print_str7: (str) => {
        console.log(str)
    }
} ;

obj.print_str7("I love Javascript!!!");

//7
const obj1 = {
    print_str8: function(str){
        console.log(str);
    }
};
obj1.print_str8("I love Javascript!!!");

//8
const print_str6 = (str) => console.log(str);

print_str6("I love Javascript!!!");

//9
const print_str9 = (str) =>{
    console.log(str);
}
print_str9("I love Javascript!!!");

//10
!function(str){
    console.log(str)
}("I love Javascript!!!");

//11
void function(str){
    console.log(str);
}("I love Javascript!!!");







