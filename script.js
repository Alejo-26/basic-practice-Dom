const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const btn = document.querySelector('#btnSum');
const pResult = document.querySelector('#result')

btn.addEventListener('click', btnOnClick); 

function btnOnClick(){
    console.log( Number(input1.value) + parseInt(input2.value) ); 
    const sumInputs =  Number(input1.value) + parseInt(input2.value);
    pResult.innerText = "Result: " + sumInputs;
}