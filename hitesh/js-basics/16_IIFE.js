// Immediately Invoked Function Expressions (IIFE)
// to isolate function from pollution of global variable declartions

//Syntax: () ()
// (function abc() { } ) ()
// ()() ---first parenthesis is for function declaratin & second is for execution
// notice there's an extra parenthesis (small braces) on the function in case of IIFE

//---
// IIFE  as arrow function
// (func abc()) => {} ();
// example:
(func chai(){ console.log(`DB Connected`);
}) ();