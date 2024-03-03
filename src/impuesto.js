import codimpuesto from "./codImpuesto.js";

function impuesto(precio,cantidad,codigo,categoria) {

    if (categoria === "Bebidas alcholicas") {
        let precioNeto = precio * cantidad;
        let tax = ((codimpuesto(codigo) + 7) / 100)* precioNeto;
        return tax ;
        
    } else {
        let precioNeto = precio * cantidad;
        let tax = (codimpuesto(codigo)  / 100)* precioNeto;
        return tax ;
    }
    
    

}
export default impuesto;