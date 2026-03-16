const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObject) {
    // console.log(`${key} is shortcur for ${myObject[key]}`);
}

// ----------------- for-in loop for array ----------------
// it will print keys of array elements

const programming = ['js', 'py', 'java', 'rb', 'cpp']

for (const keys in programming) {
    // console.log(keys)
    
}

// it will print values of array elements
for (const keys in programming) {
    // console.log(programming[keys])
    
}

// ----------------- for-in loop for maps ----------------

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)
    
}
