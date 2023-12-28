//    Immediately Invoked Function Expressions (IIFE)


//  named IIFE
(function milk(){
    console.log(`DB CONNECTED`);
})();


// simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('mayank')

