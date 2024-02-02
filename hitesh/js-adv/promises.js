// Promise
// The Promise object represents the eventual completion 
// (or failure) of an asynchronous operation 
// and its resulting value.

//Consuming & creating promises, mostly we consume promises
//
//Creating promises
const myPromise = new Promise(function(resolve, reject)
{
    // Do ann async task
    // DB Calls, cryptography, network
    setTimeout(function()
    {
        console.log('Async task is complete');
        // connecting resolve
        resolve()
    }, 1000)
})

myPromise.then(function()
{
    console.log(`Promise consumed`);
})

/////////////////////////////////////////////////
// another example
new Promise(function(resolve, reject)
                        {
                            setTimeout(function()
                            {
                                console.log(`Async task 2`);
                                resolve()
                            }, 1000)
                        }).then(function()
                        {
                            console.log(`Async 2 resolved`);
                        })
//in above example we didn't give it a name in a variable
// so we directly called it using .then
        
////////////////////////////////////////////
// another example
// Promise 3
const myPromise2 = new Promise(function(resolve, reject)
                        {
                            setTimeout(function()
                            {
                                resolve({username: "Chai", email:"chai@example.com"})
                            }, 1000)
                        })

myPromise2.then(function(user)
{
    console.log(user);
})                        
// prints out the resolve's parameter


////////////////////////////////////////////
// another example
// Promise 4
const promise4 = new Promise(function(resolve, reject)
                    {
                        setTimeout(function()
                        {
                            let error = true
                            if (!error)
                            {
                                resolve({username:"hitesh", password:"123"})
                            }
                            else
                            {
                                reject(`ERROR: Something went wrong!`)
                            }
                        }, 1000)
                    })
//callback of above function
promise4.then((user)=>
                {
                    console.log(user);
                    return user.username
                })
                .then((username)=>
                    {
                        console.log(username);
                    })
                    .catch((function(error)
                        {
                            console.log(error);
                        }))
                        //finally in promises
                        .finally(()=>
                            {
                                console.log(`The promise is either resoved or rejected`);
                            })

///////////////////////////////////////
//PROMISE 5
const promise5 = new Promise(function(resove, reject)
                            {
                                setTimeout(function()
                                {
                                    let error = true
                                    if (!error)
                                    {
                                        resolve({username: "Javascript", password: "123"})
                                    }
                                    else
                                    {
                                        reject(`ERROR: JS went wrong`)
                                    }
                                }, 1000)
                            });
//now here we'll use async await instead of .then
async function consumePromiseFive(){
    try
    {
        const response = await promise5
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
consumePromiseFive()

//////////////////////////////////
// handling json response
async function getAllUsers()
{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch (error){
        console.log(`ERROR: `, error);
    }
}

getAllUsers()

////////////////////////////////
//Using 

fetch('https://jsonplaceholder.typicode.com/users')
.then((i) => {
    return i.json()
})
.then((i) => {console.log(i);})
.catch((error) => console.log(error);)