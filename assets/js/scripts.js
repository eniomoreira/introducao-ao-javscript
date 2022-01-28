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
        decrement();
        document.getElementById('currentNumber').style.color = 'red';
    }else{
        decrement();
    }
});

document.getElementById("adicionar").addEventListener("click",function(event){
    if(currentNumber >= -1){
        document.getElementById('currentNumber').style.color = 'black';
        increment();
    }else{
        increment();
    }
});
//document.getElementById("subtrair").addEventListener("click", decrement);

//document.getElementById("adicionar").addEventListener("click", increment);

