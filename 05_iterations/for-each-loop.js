// --------- for-each loop in array (builtin - prototype)

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach( function (item) {
    // console.log(item);
} )

// using arrow function as callback function
coding.forEach( (item) => {
    // console.log(item);
} )


// using pre defined printMe function as a callback function
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe) //only give printMe function's reference


// foreach doesn't only take item parameter but also indexes, arr etc.
coding.forEach ( (item, index, arr)  => {
    // console.log(item, index, arr)
} )

// -------------------------- for-each loop in objects inside array ----------------

const myCoding = [
    {
        languageName: "javascipt",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName)
} )