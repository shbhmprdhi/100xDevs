// Objects are called Keyed collections
// "maps" & "set" objects
// 1. Map

const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
// map methods
// sayings.size;
// sayings.get("dog"); //woof
// sayings.has("bird") // false
// sayings.delete("dog");

for (const [key, values] of sayings)
{
    console.log(`${key} goes ${values}`);
}

// 2. Set
// basically arrays but with unique values



