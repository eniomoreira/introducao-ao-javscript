//solucao 1
function palindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//solucao 2
function palindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2 ; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }

        return true;
    }
}

console.log(palindromo2('gato'));