function comparaNumeros(a,b){
    var primeiraFrase = retornaPrimeiraFrase(a,b);
    var segundaFrase = retornaSegundaFrase(a,b);
    console.log(`${primeiraFrase}${segundaFrase}`);
};

function retornaPrimeiraFrase(a,b){
    let aux = '';

    if(a !== b){
        aux = 'nao';
    }

    return `Os numeros ${a} e ${b} ${aux} sao iguais.`
};

function retornaSegundaFrase(a,b){
    const soma = a + b;
    let compDez = 'menor';
    let compVinte = 'menor';

    if(soma >= 10){
        compDez = 'maior';
    }

    if(soma >= 20){
        compVinte = 'maior';
    }

    return `Sua soma e ${soma}, que e ${compDez} que 10 e ${compVinte} que 20.`

};

comparaNumeros(5,5);