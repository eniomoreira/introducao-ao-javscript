function substituiPar(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array[i] = 0;
        }
    }

    return array;
}

meyArray = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(meyArray);
console.log('\n');
console.log(substituiPar(meyArray));
