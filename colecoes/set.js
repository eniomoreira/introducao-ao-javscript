const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
var myNewArray = [];

const mySet = new Set(myArray);

//console.log(mySet);

for(let item of mySet){
    myNewArray.push(item);
}

console.log(myNewArray);
