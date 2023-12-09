
function sayMyName() {
console.log("M");
console.log("a");
console.log("y");
console.log("a");
console.log("n");
console.log("k");
}

// sayMyName()

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2


}


const result = addTwoNumbers(3,7) 

// console.log("Result: ", result);]



function loginUser(username = "raj"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser("mayank"))
// console.log(loginUser("mayank"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 500, 3999,288))


const user = {
    username: "Mayank",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price:400
})


const myNewArray = [200, 400, 300, 700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 300, 700]));
