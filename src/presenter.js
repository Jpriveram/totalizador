import totalizador from "./totalizador.js";
import codimpuesto from "./codImpuesto.js";
import impuesto from "./impuesto.js";
import catimpuesto from "./catImpuesto.js";
import imprimirDescuentoOrden from "./imprimirDescuentoOrden.js";


const price = document.querySelector("#precio");
const amount = document.querySelector("#cantidad");
const code = document.querySelector("#codigo");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");
const selCod = document.querySelector("#selectCodigo");
const selCat = document.querySelector("#selectCategoria");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  

  const pNumber = Number.parseInt(price.value);
  const cNumber = Number.parseInt(amount.value);
  const selectedValue = selCod.value;
  const ValueCat = selCat.value;


  div.innerHTML = "<p>" + 
  "Precio producto: "+ pNumber + "<br>" +
  "Cantidad producto: "+ cNumber + "<br>" +
  "Impuesto para el estado " + selectedValue + "(" + codimpuesto(selectedValue) + "%)  + impuesto para " + ValueCat + "(" + catimpuesto(ValueCat) + "%): "+ impuesto(pNumber,cNumber,selectedValue,ValueCat) + "<br>" +
  "Descuento por cantidad de " + cNumber + " unidades es de: " + imprimirDescuentoOrden(cNumber) + " del precio total " + "<br>" + 
  "Precio neto: " + totalizador(pNumber,cNumber,selectedValue,ValueCat) + 
  "</p>";
});
