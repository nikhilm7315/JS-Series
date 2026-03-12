// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 41){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }


// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);


// shorthand notation

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); // but this is a bad practice

/* if (balance < 500){
    console.log("less than 500");

} else if (balance < 750){
    console.log("less than 750");

} else if (balance < 900){
    console.log("less than 900");

} else{
    console.log("less than 1200");

} */


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow to buy course");
}
