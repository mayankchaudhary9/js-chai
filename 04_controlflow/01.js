// if 
const isUserLoggedIn = true
const temperature = 65

// 1.
// if (temperature === 55) {
//     console.log("less then 65");
// }else {
//     console.log("temperature is greater then 65");
// }

// console.log("Execute");

        // <, >, <=, >=, ==, !=, ===, !==


// 2.        
// const score = 200

// if (score >100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);



// 3.
// const balance = 1000

  // if (balance > 500) console.log("test"), console.log("test2"); 

// if (balance < 500){
//     console.log("less than");
// }else if(balance <750) {
//     console.log("less than 750");
// }else if (balance <900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }



// 4.
const userLoggedIn = true
const debitCard = true
const loggedFromGoogle = true
const loggedFromEmail = false

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedFromEmail || loggedFromGoogle){
    console.log("User logged in");
}
