import validator from './validator.js';

console.log(validator);

document.getElementById("btnBuy").addEventListener("click", showPayment());

function showPayment() {
  console.log("hola");
  document.getElementById("payment").style.display ='block';
}
/*const btnInstrumentToBuy = document.getElementById('btnBuy');
btnInstrumentToBuy.addEventListener('click', showPayment);

function showPayment() {
  console.log("Hola");
}*/
