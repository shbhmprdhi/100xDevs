// normal declaration of numbers
// const score = 400;
// console.log(score); //output: 400

// //type casting a number // gives more protype methods as compared to uncastednumbers
// const balance = new Number(100);
// console.log(balance); //output: [Number: 400]

// // to get more methods, just convert it to string // be cautious during operations
// console.log(balance.toString())
// console.log(balance.toString().length)  

// //fixing the precision values, ostly used in apps to not show full precision values
// console.log(balance.toFixed(2)) //output: 100.00
// console.log(balance.toFixed(4)) //output: 100.0000

// //toprecision()
// const number1 = 8.34567
// console.log(number1.toPrecision(3)) //output: 8.34

// //toLocaleString() //adds commas for legibilty, mostly used for counting money // locality specific
// const number2 = 1000000;
// console.log(number2.toLocaleString()); //gives US values 
// console.log(number2.toLocaleString("en-IN")); //will give Inian values 

// // max & min values
// console.log(Math.min(2, 3, 4, 5, 6)); //output: 2
// console.log(Math.max(2, 3, 4, 5, 6)); //output: 6


// //-------------------Math Operations------------------//
// console.log(Math); //it is an object with multiple methods

// //absolute values
// console.log(Math.abs(-4)); //output: 4 (strips out the signage)

// //round
// console.log(Math.round(4.3)); //rounds off the number
//floor & ceil
// console.log(Math.floor(4.5)); // output: 4
// console.log(Math.ceil(4.5)); // // output: 5

// random
// console.log(Math.random()); //output: values b/w 0-1
// we can limit values of random between min & max
// 1. Multiply by 10
// 2. Add 1
// 3. bind within min & max values
// const min = 10;
// const max = 20;
// console.log(Math.floor((Math.random() * (max - min + 1))) + min);