function sayMyname() {

console.log("N");
console.log("I");
console.log("K");
console.log("H");
console.log("I");
console.log("L");

}

// sayMyname()

// function addTwonumbers(number1, number2){ //number1 and number2 are parameters (while defining function)
//     console.log(number1 + number2);
// }

function addTwonumbers(number1, number2){ //number1 and number2 are parameters (while defining function)
    // let result = number1 + number2
    // return result

    return number1 + number2
    console.log("Nikhil"); //This won't be printed because no code gets executed after return statement is passed
    
}

// const result = addTwonumbers(1, 4) //Here 1 & 4 are arguements (while calling function)
// console.log("Result:", result);

// addTwonumbers(1, "4")
// addTwonumbers(1, "a")

// function loginUserMessage(username = "user"){
//     if(username === undefined) {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`

// }

function loginUserMessage(username = "user"){
    if(!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("Nikhil"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1) { //Rest operator - It will take all the remaining arguments and put them in an array
return num1
}

// console.log(calculateCartPrice(100));
// console.log(calculateCartPrice(100, 200, 300, 400, 2000)); // val1 = 100, val2 = 200, num1 = [300, 400, 2000]

const user = {
    username: "Nikhil",
    price: 200
    }

    function handleObject(anyObject) {
        console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
    }

// handleObject(user)
// handleObject({
//     username: "Nikhil",
//     price: 3000
// });


const myNewArray = [1200, 400, 600, 800]

function returnSecondValue(getArray) {
    return [getArray[1], getArray[2]]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 200, 300, 400, 500]));
