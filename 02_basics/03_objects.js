// singleton

// object literals

const mySym = Symbol("key1");

const user = {
    name: "Mayank",
    "full name": "Mayank Chaudhary",
    [mySym]: "key1",
    age: 21,
    location: "Ghaziabad",
    email: "Mayank@paytm.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mySym])

user.location = "Noida"
// Object.freeze(user)
user.location = "Delhi"
// console.log(user); 



user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());



