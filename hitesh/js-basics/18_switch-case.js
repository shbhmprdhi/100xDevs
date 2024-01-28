//switch cases - when multiple if elses are required

// switch(key){
//     case value:
//         break;

//     default:
//         break;
// }
// it matches key to values, if correct executes that case

// example
const month = 3; //if it would be a string then also it'll will work

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case matched");
        break;
}