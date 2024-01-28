// mostly in shopping carts

const array1 = [1, 2, 3, 4, 5]

// const myTotal = array1.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)
//////////////////////////////////////
// smae operation i arrow fxn

const myTotal = array1.reduce((acc, curr) => (acc+curr), 0);
console.log(myTotal);

