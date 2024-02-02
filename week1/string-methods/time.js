// 1970 is the epoch for time in Js

//.getTime method
//
//
const currentDate = new Date();
console.log("Time in ms since 1970", currentDate.getTime());

function calculateSum()
{
    let a = 0;
    for( let  i = 0; i < 10000000000; i++)
    {
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const AfterDate = new Date();
const AfterTimeInMs = AfterDate.getTime();

console.log(AfterTimeInMs - beforeTimeInMs);