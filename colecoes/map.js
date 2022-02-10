function getAdm(map){
    let usrAdmin = [];

    for([key, value] of map){
        if(value == 'Admin'){
            usrAdmin.push(key);
        }
    }

    return usrAdmin;
}

const myMap = new Map();

myMap.set('Luis','Admin');
myMap.set('Enio','Admin');
myMap.set('Lucas','User');
myMap.set('Telma','Admin');

console.log(getAdm(myMap));
