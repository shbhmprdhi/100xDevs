// singleton (using constructor method)
//Object.create

// using object literals (most used)
// const user = {
//     name: "shubh",
//     age: 18,
//     location: "bgt",
//     email: "shubh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

//accesing an object element
// 1st method
// console.log(user.email);
// // 2nd method to access object elements
// console.log(user["email"]);

// add kv pairs (as simple as assigning)
// user.id = "123abc";
// console.log(user);

// nesting: objects in objects
// const user2 = {
//     name: {
//         firstname: "Anuj",
//         lastname: "Pardhi",
//     }
// }
// console.log(user2.name.firstname);

// // optional chaining (?) // mostly used in API responses checks if it is there or not //saves use of multiple if else
// console.log(user2.name?.firstname);


// Merging objects & it's values using Object.assign(target, source)
// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "c", 4:"d"}

// const obj3 = Object.assign(obj1, obj2)
// // but always use this as best practice
// const obj3 = Object.assign({}, obj1, obj2)
// why? because 1st element is  target & others are values to be filled in that

//2. Merging using spread operator
// const obj3 = {...obj1, ...obj2}

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// //check if it has the property
// console.log(user.hasOwnProperty("isLoggedIn")); //returns true or flase

//---------------------------------------------
// DESTRUCTURING of Objects & other things


// what if you need to access the object elements frequently?
// it's possible to assign it in a variable & then use that variable name
// const {name: user_name} = user;
// console.log(user_name);



// -------API & JSON handling---------------


//JSON
// {
//     "name": "shub",
//     "age": "18",
// }
