function validaArray(array,tamanho){
    if(!array && !tamanho){
        throw new ReferenceError('Algum ou todos os parementos nao foram passadores corretamente');
    }else if(typeof array != 'object'){
        throw new TypeError('O array nao e um objeto!');
    }else if(typeof tamanho != 'number'){
        throw new TypeError('O tamanho iformado nao e um numero');
    }else if(array.length !== tamanho){
        throw new RangeError('O tamanho fornecido nao e o mesmo tamnho do array');
    }

    return array;
}

var array = [];
var numero;

try {
    validaArray(array, numero);
} catch (error) {
    if(error instanceof ReferenceError){
        console.log(error);
    }else if(error instanceof TypeError){
        console.log(error);
    }else if(error instanceof RangeError){
        console.log(error);
    }
}