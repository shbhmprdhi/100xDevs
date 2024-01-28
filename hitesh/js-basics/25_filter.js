////////////////////////////
// FILTER MAPS
// filter is method operation
//
//Syntax:
// array.filter ( () => {} )
// return 
// return is imp if {} curly braces are used due to obviously the scopes
// else it'll return empty array []

// const myArray = ["1", "2", "3", "4", "5"];

// const newNums = myArray.filter((num) => num > 3 );

// console.log(newNums);

//////////////////////////////////////
// examples of filter exercises
//
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //books with histoy genre
  //const requiredBooks = books.filter( (i) => i.genre === "History")
  //console.log(requiredBooks);

  //books published after 1995 & genre is history
  const requiredBooks = books.filter( (i) => (i.publish >= 1995 && i.genre === "History"));
  console.log(requiredBooks);