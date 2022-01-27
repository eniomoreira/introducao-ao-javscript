var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

document.getElementById("subtrair").addEventListener("click",function(event){
    if(currentNumber <= 0){
        document.getElementById("subtrair").disabled = true;
        document.getElementById("subtrair").disabled = false;
    }else{
        decrement();
    }
});

document.getElementById("adicionar").addEventListener("click",function(event){
    if(currentNumber >= 10){
        document.getElementById("adicionar").disabled = true;
        document.getElementById("adicionar").disabled = false;
    }else{
        increment();
    }
});
//document.getElementById("subtrair").addEventListener("click", decrement);

//document.getElementById("adicionar").addEventListener("click", increment);

