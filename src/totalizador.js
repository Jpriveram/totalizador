import impuesto from "./impuesto.js";
import descuentoPorOrden from "./descuentoPorOrden.js";
import descuentoAdicionalCat from "./descuentoAdicionalCat.js";
import envio from "./peso.js";
import descuentoEnvio from "./descuentoEnvio.js";

function totalizador(precio, cantidad, eCodigo, categoria,peso, tipoCliente){
    let precioNeto = precio * cantidad;
    //console.log("precio neto: " + precioNeto);
    let imp = impuesto( precio, cantidad, eCodigo, categoria);
    //console.log("Impuesto Estado: " + imp);
    let descuentoOrden = descuentoPorOrden(cantidad, precioNeto);
    //console.log("Descuento Orden: " + descuentoOrden);
    let descuentoAdicionalCategoria = descuentoAdicionalCat(categoria, precioNeto);
    //console.log("Descuento Adicional Cat: " + descuentoAdicionalCategoria);
    let precioEnvio = envio(peso,cantidad);
    //console.log("Precio de envio: " + precioEnvio);
    let descuentoEnv = descuentoEnvio(tipoCliente, precioEnvio);
    //console.log("Descuento Env: " + descuentoEnv);
    let salida = imp + precioNeto - descuentoOrden - descuentoAdicionalCategoria + precioEnvio - descuentoEnv;
    //console.log("Salida: " + salida)
    
    if(tipoCliente === "Recurrente" && precioNeto > 3000 && categoria === "Alimentos"){
        salida = salida - 100;
    }

    return salida;    
}

export default totalizador;