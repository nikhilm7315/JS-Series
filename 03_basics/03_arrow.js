const user = {
    username: "Nikhil",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to our website! Your price is ${this.price}`);
        // console.log(this); // This will print the 'user' object because 'this' refers to the object that is calling the method.
    }
}

// user.welcomeMessage(); // This will print "Nikhil welcome to our website! Your price

// user.username = "Akhil";
// user.welcomeMessage(); // This will print "Akhil welcome to our website! Your price is 1000"

console.log(this); // In the global scope, 'this' refers to the global object (window in browsers, global in Node.js). In strict mode, 'this' will be undefined in the global scope.


function chai() {
    console.log(this); // In a regular function, 'this' refers to the global object (window in browsers, global in Node.js). In strict mode, 'this' will be undefined in a regular function.
}

chai();