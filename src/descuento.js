import descuentoPorOrden from "./descuentoPorOrden";
import descuentoAdicionalCat from "./descuentoAdicionalCat";

function descuento(precio,cantidad,categoria){
    let precioNeto = precio * cantidad;
    let descuentoTotal = descuentoPorOrden(cantidad, precioNeto) + descuentoAdicionalCat(categoria, precioNeto);
    return descuentoTotal;
}

export default descuento;