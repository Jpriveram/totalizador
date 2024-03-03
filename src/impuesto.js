import codimpuesto from "./codImpuesto.js";
import catimpuesto from "./catImpuesto.js";

function impuesto(precio,cantidad,codigo,categoria) {
    if (categoria === "Bebidas alcholicas") {
        let precioNeto = precio * cantidad;
        let tax = ((codimpuesto(codigo) + catimpuesto(categoria)) / 100 )* precioNeto;
        return tax ;
        
    } else 
    {
        if (categoria === "Muebles") {
            let precioNeto = precio * cantidad;
            let tax = ((codimpuesto(codigo) + catimpuesto(categoria)) / 100)* precioNeto;
            return tax ;
            
        } else 
        {
            let precioNeto = precio * cantidad;
            let tax = (codimpuesto(codigo)  / 100)* precioNeto;
            return tax ;
        }
    }
    
    

}
export default impuesto;