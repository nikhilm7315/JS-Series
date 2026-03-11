// Immediately Invoked Function Expression

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed as soon as it is defined. It is commonly used to avoid polluting the global namespace or to create a private scope for variables.

// In regular function
(function chai (){
    console.log("DB CONNECTED");
})();

//this next function will throw error if the semicolon is not applied at the end of first function - this is neccessary  to end the context of above function
( () => {
    console.log("DB CONNECTED")
} )();
