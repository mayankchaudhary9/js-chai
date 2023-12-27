const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "mayank"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "mayank"
//     console.log(this);

// }
// chai()


// const chai = function() {
//     let username = "mayank"
//     console.log(this.username);
// }

// const chai = () =>{                          //arrow function
//     let username ="mayank"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo =(num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) =>({username: "mayank"})



console.log(addTwo(3,4));