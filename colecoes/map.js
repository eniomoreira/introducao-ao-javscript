function getAdm(map){
    let usrAdmin = [];

    for([key, value] of map){
        if(value == 'Admin'){
            usrAdmin.push(key);
        }
    }

    return usrAdmin;
}
// Map pe baseado em chave e valor, porem as chaves podem ser de qualquer tipo, ao contrario de objetos.
const myMap = new Map();

myMap.set('Luis','Admin');
myMap.set('Enio','Admin');
myMap.set('Lucas','User');
myMap.set('Telma','Admin');

console.log(getAdm(myMap));
