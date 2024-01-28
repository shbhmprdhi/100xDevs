// since iterations in array is very common
// there are array and some objects & function specific loops

// 1. for of loop
// can be applied on 
// a. Arrays: ["", "", ""]
// b. Objects: [{}, {}, {}]
// c. functions

// a. for of loop on Arrays
//
// const array1 = [1, 2, 3, 4, 5];
// for (const i of array1)
// {
//     console.log(`Each char is ${i});
// }

// b. for of loop on Strings
//
// const string1 = "Hello World!";
// for (const i of string1)
// {
//     console.log(i);
// }

// c. for-of loop on Maps (maps are similar to arrays: but it stores in order & unique values)
//
// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")
// console.log(map);
//
// for (const i of map)
// {
//     console.log(i);
// }
//output:
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]
//
// to print keys & values separate
// for (const [key, value] of map){
//     console.log(key, ':-', value);
// }

// d. for-of loop on Objects 
// won't work on objects
// Not easy to iterate using for-of in objects, 
//there are other methods for the same
// for-in loop is used for iteration over objects
// up next: for in loop
