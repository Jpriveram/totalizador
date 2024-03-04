import totalizador from "./totalizador.js";
import codimpuesto from "./codImpuesto.js";
import impuesto from "./impuesto.js";
import catimpuesto from "./catImpuesto.js";
import imprimirDescuentoOrden from "./imprimirDescuentoOrden.js";
import descuentoAdicionalCat from "./descuentoAdicionalCat.js";
import imprimirDescAdicCat from "./imprimirDescAdicCat.js";
import descuento from "./descuento.js";
import envio from "./peso.js";


const price = document.querySelector("#precio");
const amount = document.querySelector("#cantidad");
const delivery = document.querySelector("#peso");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");
const selCod = document.querySelector("#selectCodigo");
const selCat = document.querySelector("#selectCategoria");
const cliente = document.querySelector("#selectCliente");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  

  const pNumber = Number.parseInt(price.value);
  const cNumber = Number.parseInt(amount.value);
  const wnumber = Number.parseInt(delivery.value)
  const selectedValue = selCod.value;
  const ValueCat = selCat.value;
  const valueCliente = cliente.value;


  div.innerHTML = "<p>" + 
  "Precio producto: "+ pNumber + "<br>" +
  "Cantidad producto: "+ cNumber + "<br>" +
  "Impuesto para el estado " + selectedValue + "(" + codimpuesto(selectedValue) + "%)  + impuesto para " + ValueCat + "(" + catimpuesto(ValueCat) + "%): "+ impuesto(pNumber,cNumber,selectedValue,ValueCat) + "<br>" +
  "Descuento por cantidad de " + cNumber + " unidades es de: " + imprimirDescuentoOrden(cNumber) + " del precio total " + 
  "+ descuento adicional por categoria " + ValueCat + "(" + imprimirDescAdicCat(ValueCat) + "):" + descuento(pNumber, cNumber, ValueCat) + "<br>" + 
  "Precio de envio: " + envio(wnumber,cNumber) + "$" + "<br>" +
  "Tipo de cliente: " + valueCliente + "<br>" + 
  "Precio neto: " + totalizador(pNumber,cNumber,selectedValue,ValueCat,wnumber) + 
  "</p>";
});
