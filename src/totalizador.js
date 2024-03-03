import impuesto from "./impuesto.js";
import descuentoPorOrden from "./descuentoPorOrden.js";
import descuentoAdicionalCat from "./descuentoAdicionalCat.js";

function totalizador(precio, cantidad, eCodigo, categoria){
    let precioNeto = precio * cantidad;
    //console.log("precio neto " + precioNeto);
    let imp = impuesto( precio, cantidad, eCodigo, categoria);
    //console.log("Impuesto Estado " + imp);
    let descuentoOrden = descuentoPorOrden(cantidad, precioNeto);
    //console.log("Descuento Orden " + descuentoOrden);
    let descuentoAdicionalCategoria = descuentoAdicionalCat(categoria, precioNeto)
    let salida = imp + precioNeto - descuentoOrden - descuentoAdicionalCategoria;
    //console.log("Salida " + salida)
    return salida;    
}

export default totalizador;