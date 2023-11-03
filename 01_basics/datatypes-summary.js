       //    primitive

//  7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score =100
const scoreValue = 100.82

const IsLoggedIn = false
const outSideTemp = null         
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 77636468576857572445n  


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint
 


// Reference (Non primitive)       

// Array, Objects, Functions

const games = ["cricket", "vollyball", "bodybuilding"]
let myObj = {
    name: "mayank",
    age: 21,
    weight: "75kg",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof games);


// Return type of variables in JavaScript
// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object