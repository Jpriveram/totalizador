import impuesto from "./impuesto.js";

function totalizador(precio,cantidad, eCodigo){
    let precioNeto = precio * cantidad;
    return impuesto(precio,cantidad,eCodigo) + precioNeto;    
}

export default totalizador;