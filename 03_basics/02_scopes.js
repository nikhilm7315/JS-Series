let a = 10;
// const b = 20;
// var c = 30; // 'var' declarations are function-scoped or globally-scoped, and they are hoisted to the top of their scope. This means that 'c' is accessible throughout the entire function or global scope, even before its declaration.

if (true) {
    let a = 100; // This 'a' is different from the 'a' declared outside the block. It is only accessible within this block.
    const b = 200; // This 'b' is different from the 'b' declared outside the block. It is only accessible within this block.
    var c = 300; // This 'c' is the same as the 'c' declared outside the block. It will be hoisted to the top of the function or global scope and will overwrite the previous value of 'c'.
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Nikhil"; // This variable is only accessible within the 'one' function
    // console.log("Inside function one");
    function two() {
        const website = "Nikhil.com";
        // console.log(username); // This will work because of lexical scoping. The 'two' function has access to the variables of its parent function 'one'.
    }
    // console.log(website); // This will throw an error because 'website' is not accessible in the 'one' function. It is only accessible within the 'two' function.

    two()
}

one()

if (true) {
    const username = "Nikhil"; // This variable is only accessible within this block
    if (username === "Nikhil") {
        const website = "youtube.com"; // This variable is only accessible within this block
        // console.log(username + " " + website); // This will work because of block scoping. The inner block has access to the variables of its parent block.
    }
    // console.log(website); // This will throw an error because 'website' is not accessible in this block. It is only accessible within the inner block.

}

// console.log(username); // This will throw an error because 'username' is not accessible in this block. It is only accessible within the outer block.


// ++++++++++++++++++++++ interesting ++++++++++++++++++++++++++


console.log(addone(5)); // This will return 6
function addone(num) {
    return num + 1;
}


console.log(addtwo(5)); // This will throw an error because 'addtwo' is not defined at this point. Function expressions are not hoisted, so 'addtwo' is not accessible before its declaration.
const addtwo = function(num) {
    return num + 2;
}
