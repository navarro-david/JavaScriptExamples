console.log("Hello World");
let a = 1, b = 2;
let sum = function(x,y){
    return x + y;
}

let total = sum(1, 2);
console.log(total);

console.log("This is a \"requires\" example...");

let m2 = require('./module2');
m2();