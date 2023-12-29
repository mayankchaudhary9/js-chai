// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5){
        // console.log("element 5");
    }
    // console.log(element);

}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //  console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop: ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
    
}


let myArr = ["IronMan", "Thor", "Caption America"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}



//  break and continue


for (let i = 1; i <= 20; i++) {
    if (i ==5){
        console.log("detect 5");
        break;
    }
    console.log(`value of i is ${i}`);
}



for (let i = 1; i <= 20; i++) {
    if (i ==5){
        console.log("detect 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}