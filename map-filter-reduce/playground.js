const maca = {
    value : 2,
}

const melao = {
    value : 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

function filtraPar(arr){
    return arr.filter(function(item){
        if(item % 2 === 0){
            return item;
        }
    });
}

function somaValores(arr){
    return arr.reduce(function(accumulador, currentValue, index, arr){
        return accumulador += currentValue;
    });
}

function saldoFinal(arr, saldo){
    let totalPreco = somaValores(arr);
    return (saldo - totalPreco);
}

let arr = [5,8,9,12,15,16,18,21,24,40];

//console.log('map com this -> maca', mapComThis(arr,maca));
//console.log('map com this -> melao', mapComThis(arr,melao));
//console.log('Filtarando numeros pares em um array', filtraPar(arr));
//console.log('Somando todos os valores de um array', somaValores(arr));
console.log('O saldo final apos as compras e de: ', saldoFinal(arr, 500));