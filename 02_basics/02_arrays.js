const marvelheros = ["thor", "Ironman", "spiderman"]
const dcheros = ["superman", "flash", "batman"]

// marvelheros.push(dcheros)

// console.log(marvelheros);
// console.log(marvelheros[3][1]);

// const allHeros = marvelheros.concat(dcheros)
// console.log(allHeros);

const allNewHeros = [...marvelheros, ...dcheros]

// console.log(allNewHeros);

const myarray = [1, 2, 3, [3, 6, 2], 8, [4, 7, [4, 5]]]

const real_myarray = myarray.flat(Infinity)
// console.log(real_myarray);



console.log(Array.isArray("Mayank"))
console.log(Array.from("Mayank"))
console.log(Array.from({name: "Mayank"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


