// this keyword: refers the current context

// const user = {
//     username: "shubh",
//     course: "100xDevs",
//     price: "$200",

//     welcomeMessage: function()
//     {
//         console.log(`Welcome, ${this.username}!`);
//     }
// }

// user.welcomeMessage()

// user.username = "sam";
// user.welcomeMessage() //this means 'this' doesnt hardcode the context

// // you can see the current context by printing this
// console.log(this);  //this is node env. //here there's no context
//                     // in browsers this will throw the global object "window object" not the blank

// +++++++++++++++++++++++++++++++ IMP ++++++++
// this only works in an object, not in a function, It'll throw undefined if used in a function
// hence it doesn;t work in arrow functon as well


// ======================================================
// ARROW FUNCTIONS
// () => {} 
// as simple as that

// ---
// const chai = function()
// {
//     let username = "hitesh"
//     console.log(username);
// }
// //now we'll call this function, to execute it
// chai()
// ---

// ---
// arrow fxn of above fxn will be
// const chai = () => //just remove the function keyword, and use arrow (syntactical sugar)
// {
//     let username = "hitesh"
//     console.log(username);
// }
// //now we'll call this function, to execute it
// chai()
// ---

// --- BASIC ARROW FXN
// const add = (i, j) =>
// {
//     return i + j;
// }
// console.log(add(3, 4));
// ---

// --- Implicit return in arrow fxn
// if the statement is one-liner Implicit return can be used where parentheses (curly braces) are no longer required
// const add = (i, j) => i + j;
// or
// const add = (i, j) => (i + j)
// console.log(add(5, 6));
// ---

// --
// Explicit return
// when return keyword is used explicitly
// return with {} curly braces
// --

// ---
// we can return an object as well in implicit return
// const func = () => ({user: "shubham"});
// console.log(add());
// ---
