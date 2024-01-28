// string interpolation using placeholders

const name = "shubh";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

//we can also declre a string using the object & type casting, this enables more methods & prototypes to use
const gameName = new String("Football")

/// STRING METHODS ///

//---prototypes
// console.log(gameName[0]);
// console.log(gameName.__proto__);

//---toUperCase
// console.log(gameName.toUpperCase());

//---substring
// const newString = gameName.substring(0, 4) //unlike slice substring doesn't accept -ve values
// console.log(newString);

//---slice
// const anotherString = gameName.slice(-8, 4) //we can give -ve values in slice, it'll start the count from last if -ve
// console.log(anotherString); //output: Foot ,it sliced-out the last 4 elements

//---trim (for whitespaces)
// const string1 = "   hello  "
// console.log(string1.trim())

//---replace
//---includes

//---split
console.log(gameName.split("-"));
