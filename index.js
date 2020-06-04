import validator from './validator.js';

console.log(validator);

document.getElementById("btnShop").addEventListener("click", showPayment());

function showPayment() {
  console.log("hola");
  document.getElementById("instruments").style.display ='none';
}
