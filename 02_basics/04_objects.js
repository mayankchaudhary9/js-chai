// const tinderUser = new Object()     // singleton
const tinderUser = {}      //  non singleton

tinderUser.id = "123abc"
tinderUser.name = "rohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"  
    },
    {
        id: 1,
        email: "h@gmail.com"  
    },
    {
        id: 1,
        email: "h@gmail.com"  
    },
    {
        id: 1,
        email: "h@gmail.com"  
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "javascript",
    price: "9999",
    courseInstructor: "Mayank"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name" : " Mayank ",
//     "coursename" : " javascript",
//     "price" : "free"
// }


[
    {},
    {},
    {}
]