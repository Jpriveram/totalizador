import codimpuesto from "./codImpuesto.js";
import catimpuesto from "./catImpuesto.js";

function impuesto(precio,cantidad,codigo,categoria) {
    let precioNeto = precio * cantidad;
    let tax = ((codimpuesto(codigo) + catimpuesto(categoria)) / 100 )* precioNeto;
    return tax ;
}
export default impuesto;