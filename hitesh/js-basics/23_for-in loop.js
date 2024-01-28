// 1. FOR IN Loop 


// A.  FOR-IN LOOP ON OBJECTS

//It does work on objects
// const myObj = {
//         "game1" : "NFS",
//         "game2" : "GTA",
//     }
//
// for (const key in myObj)
// {
//     console.log(`${key} is ${myObj[key]}`);
// }
//
// remember
// to access key: we've used key
// to access value: we've used myObj[key]  
//this myObj[key] represents values

// FOR-IN LOOP ON Arrays
//
const myArray = [1, 2, 3, 4, 5];

for (const key in myArray)
{
    console.log(key);           //this is to print key
    console.log(myArray[key]);  //this si to keep 
}

// FOR IN Loop on Maps
// maps are non Iteratable using simple iterators
// there are other methods to do the same