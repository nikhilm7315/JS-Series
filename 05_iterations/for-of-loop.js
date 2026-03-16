// for-of loop

// ["", "", ""]
// [{}, {}, {}]

// -----------for-of in arrays----------
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);

}

const greetings = "Hello and Welcome to Earth"

for (const letter of greetings) {
    // console.log(`Each letter of greeting is: ${letter}`)
    // if(letter === "o"){
    //     console.log("Hello!");
    //     break
    // }
}


// ------------ Maps ----------------

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

// ---------for-of in arrays-----------

// for (const key of map) {
//     console.log(key)
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// ----------for-of in objects-----------


const myObject = {
    "game1" : "NFS",
    "game2" : "SpiderMan",

}


// this syntax won't work for iteration of objects
for (const [key, value] of myObject) {
    // console.log(key, value)
}


 for (const key of myObject) {
    console.log(key)
}
