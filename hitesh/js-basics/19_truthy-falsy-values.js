// // TRUTHY VALUES
// "0"     //anything in string is truthy, even zero
// "fasle" //this is again truthy value
// " "     //even a whitespace in string is truthy
// []      //empty array is truthy
// {}      // empty object is truthy
// function(){}  //empty function is truthy


// //////////////////////////////////////
// //    FALSY VALUES
// false                 
// 0            //zero
// -0           // -ve zero
// BigInt 0n    //
// ""           //empty string
// null  
// undefined
// Nan          // not a number

//////////////////////////////////
// some special equality comparisions
// false = 0      //gives output: true
// false == ""    //gives output: true
// 0 == ""        //gives output: true


//////////////////////////////////////
// SOME SPECIAL OPERATORS

// NULLISH COALESENCE OPERATOR ?? (two question marks)

// basically fallback hai agar null & unefined values ko handle karne ke liye
// mostly handy in case of handling API responses when "null" or "undefined" is returned
// sometimes the API will give empty or unexpected values
// iss case me apan agar first value nhi mili to second value assign hogi



// isme kahani API se 'null' aur 'undefined' handle ki hai

// example
// let x;
// x = 5 ?? 10;
// console.log(x); //output: 5

// if null then second will be assigned
// let x;
// x = null ?? 10;
// console.log(x); //output: 10

// using undefined
// let x;
// x = undefined ?? 15;
// console.log(x); //output: 15

// in case of multiple Null coal operators
// let x;
// x = null ?? undefined ?? 15;
// console.log(x); //output: 10 (1st value after null & undefined will be assigned)


///////////////////////////////////////
// TERNARY OPERATOR

// basically a small if else statement

// Syntax
// condition ? true : false

const price = 100;
price <= 80 ? console.log("Affordable") : console.log("Unaffordable");