// const coding = [ "js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// in filter--- arrow function we have to use return 
// if we open scope then we have use return otherwise not

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums); 


const books = [
    { title : 'Book one', genre: 'Fiction', publish: 1981,
    edition: 2004},
    { title : 'Book two', genre: 'Non-Fiction', publish: 1981,
    edition: 2007},
    { title : 'Book three', genre: 'Animated', publish: 1989,
    edition: 2008},
    { title : 'Book four', genre: 'History', publish: 1979,
    edition: 2009},
    { title : 'Book five', genre: 'World', publish: 1988,
    edition: 2006},
    { title : 'Book six', genre: 'Science', publish: 1951,
    edition: 2007},
    { title : 'Book seven', genre: 'Space', publish: 1991,
    edition: 2005},
    { title : 'Book eight', genre: 'Fiction', publish: 1983,
    edition: 2007},
    { title : 'Book nine', genre: 'Fighter', publish: 1981,
    edition: 2007},
    { title : 'Book ten', genre: 'History', publish: 1961,
    edition: 2004},
];

let userBooks = books.filter( (bk) => bk.genre==='History')
userBooks = books.filter( (bk) => {
    return bk.publish<=1980 && bk.genre === 'History'})

console.log(userBooks);
