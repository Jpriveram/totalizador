import impuesto from "./impuesto.js";
import descuentoPorOrden from "./descuentoPorOrden.js";

function totalizador(precio, cantidad, eCodigo){
    let precioNeto = precio * cantidad;
    let imp = impuesto( precio, cantidad, eCodigo);
    let descuentoOrden = descuentoPorOrden(cantidad);
    return imp + precioNeto - descuentoOrden;    
}

export default totalizador;