import impuesto from "./impuesto.js";
import descuentoPorOrden from "./descuentoPorOrden.js";
import descuentoAdicionalCat from "./descuentoAdicionalCat.js";
import envio from "./peso.js";
import descuentoEnvio from "./descuentoEnvio.js";

function totalizador(precio, cantidad, eCodigo, categoria,peso, tipoCliente){
    let precioNeto = precio * cantidad;
    //console.log("precio neto " + precioNeto);
    let imp = impuesto( precio, cantidad, eCodigo, categoria);
    //console.log("Impuesto Estado " + imp);
    let descuentoOrden = descuentoPorOrden(cantidad, precioNeto);
    //console.log("Descuento Orden " + descuentoOrden);
    let descuentoAdicionalCategoria = descuentoAdicionalCat(categoria, precioNeto)
    let precioEnvio = envio(peso,cantidad);
    let descuentoEnv = descuentoEnvio(tipoCliente, precioEnvio);
    let salida = imp + precioNeto - descuentoOrden - descuentoAdicionalCategoria + precioEnvio - descuentoEnv;
    //console.log("Salida " + salida)
    return salida;    
}

export default totalizador;