function myslice(str, startIndex, endIndex)
{
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        if (i >= startIndex && i < endIndex)
        {
            newStr = newStr + str[i];
        }
    }
    return  newStr;
}

const value = "Shubham P"

let ans2 = value.slice(2, 5);
console.log(ans2);

console.log(myslice(value, 2, 5));