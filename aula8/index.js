//IEE 754-2008

let num1 = 0.7; //number
let num2 = 0.1; //number

num1+= num2; //0.8
num1+= num2; //0.9
num1+= num2; //1.0
num1+= num2; //1.1
num1+= num2; //1.2   
num1+= num2; //1.3
num1+= num2; //1.4
num1+= num2; //1.5
num1+= num2; //1.6
num1+= num2; //1.7
num1+= num2; //1.8
num1+= num2; //1.9
num1+= num2; //2.0

num1 = parseFloat(num1.toFixed(2)); //0.80

console.log(num1); 
console.log(Number.isInteger(num1));    

//console.log(num1 + num2); //0.7999999999999999
//console.log(num1.toString() + num2); 
//console.log(typeof num1); //number
//console.log(num1.toString(2)); 
//console.log(num1.toFixed(2)); //25.42
//console.log(Number.isInteger(num1)); //true 10 é inteiro
//console.log(Number.isInteger(num2)); //false 2.5 não é inteiro  
//let temp = num1 * 'Ola'; //NaN Not a Number
//console.log(temp); //NaN
//console.log(typeof temp); //number
//console.log(Number.isNaN(temp)); //true

