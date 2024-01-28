const myArray = [1, 2, 3, 4, 5, 6, 7]

// addNums = myArray.map((i) => i + 10);
// console.log(addNums);

//or (using return)

// addNums = myArray.map((i) => {return i + 10});
// console.log(addNums);

///////////////////////////////////////
// CHAINING
// 
//const newNums = myArray.map().map().filter()
//
// OR
//
const newNums = myArray
                .map((i) => i * 10)
                .map((i) => i + 1)
                .filter((i) => i >= 40)

console.log(newNums);