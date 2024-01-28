// Some loops are direcly integrated in Array properties
// & those ar used the most

// array example
//const array1 = ["1", "2", "3", "a", "b" ,"c"];

// it can be used as a method, since it is an array prototype property
// std syntax
// array1.forEach( function(item){...})

// basic variation
// array1.forEach( function(val){
//     console.log(val);
// })

// Arrow function variation of forEach
// syntax
// array1.forEach(() => {...})
//
// array1.forEach( (item) => { console.log(item);});

//////////////////////////////////
//for each can return elements, index & whole array as well
//
//array1.forEach((item, index, arr) => {console.log(item, index, arr);})
//
// output:
// 1 0 [ '1', '2', '3', 'a', 'b', 'c' ]
// 2 1 [ '1', '2', '3', 'a', 'b', 'c' ]
// 3 2 [ '1', '2', '3', 'a', 'b', 'c' ]
// a 3 [ '1', '2', '3', 'a', 'b', 'c' ]
// b 4 [ '1', '2', '3', 'a', 'b', 'c' ]
// c 5 [ '1', '2', '3', 'a', 'b', 'c' ]

//////////////////////////////////////////////
// OBJECTS INSIDE ARRAY
//
// const array2 = [
//     {
//         "language": "Javascript",
//         "extension": "js",
//     },
//     {
//         "language": "Python",
//         "extension": "py",
//     },
//     {
//         "language": "C",
//         "extension": "c",
//     },
//     {
//         "language": "bash",
//         "extension": "sh",
//     },
//     {
//         "language": "Javascript",
//         "extension": "js",
//     },
// ];

// array2.forEach( (elements) => {
//     console.log(`The ${elements.language} has ${elements.extension} extension.`);
// })

//////////////////////////////////////////////////
//RETURN VALUES OF forEach


// const myArray = ["1", "2", "3", "4", "5"];

// const values = myArray.forEach((elements) => {
//     console.log(elements);
//     return elements;
// });
// //it's executing the fxn but it isn't returning any value
// console.log(values);

// Output:
// 1
// 2
// 3
// 4
// 5
// undefined
// 👆 it didn't return anything, forEach deosn't return anything by default
// For this we have to explicitly add return
