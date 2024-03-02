import totalizador from "./totalizador.js";

const price = document.querySelector("#precio");
const amount = document.querySelector("#cantidad");
const code = document.querySelector("#codigo");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");
//const sel = document.querySelector("#select");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const selectedValue = sel.value;

  const pNumber = Number.parseInt(price.value);
  const cNumber = Number.parseInt(amount.value);
  const sCode = code.value;

  div.innerHTML = "<p>" + "Precio producto: "+ pNumber + "<br>" +
  "Cantidad producto: "+ cNumber + "<br>" +
  "Precio neto: " + totalizador(pNumber,cNumber,sCode) +"</p>";
});
