// for loop

for (let i = 1; i <= 10; i++) {
    const counting = i;
    if(counting == 7){
        // console.log("7 is the universal number");
    }
    // console.log(counting);
    
}

// console.log(counting) //this is not accessible here

// loop inside loop

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        // console.log(i + " * " + j + " = " + i*j)
      
    }
    
}

let myArray = ["Flash", "Batman", "Superman", ""]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue statements

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log ("Detected 5");
//         break
//     }
//     console.log(`Value of i is: ${index}`)
    
// }

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log ("Detected 5");
        continue
    }
    console.log(`Value of i is: ${index}`)
    
}