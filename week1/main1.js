// write a program to write all even nos in an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// for (let i = 0; i <= array.length; i++)
// {
//     if (array[i] % 2 == 0)
//     {
//         console.log(array[i]);
//     }
// }

///////////////////////////////////////////
// write a program to print biggest no. in an array
function largest(array){
    let i;

    // initialize max element
    let max = array[0];

    //traverse array elements
    //from second & compare
    //every element with current max
    for ( i = 1; i < array.length; i++)
        {
            if (array[i] > max)
            {
                max = array[i];
            }
        }
    return max;
}

// driver code
console.log(`Largest is ${largest(array)}`);