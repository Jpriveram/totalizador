import impuesto from "./impuesto.js";

function totalizador(precio,cantidad, eCodigo){
    if(eCodigo === "CA"){
        let precioNeto = precio * cantidad;
        return impuesto(precio,cantidad,eCodigo) + precioNeto;
    } 
    else
    {
        if(eCodigo === "NV"){
            let precioNeto = precio * cantidad;
            return impuesto(precio,cantidad,eCodigo) + precioNeto;
        } 
        else
        {
            if(eCodigo === "UT"){
                let precioNeto = precio * cantidad;
                return impuesto(precio,cantidad,eCodigo) + precioNeto;
            } 
            else
            {
                if(eCodigo === "TX"){
                    let precioNeto = precio * cantidad;
                    return impuesto(precio,cantidad,eCodigo) + precioNeto;
                } 
                else{
                    if(eCodigo === "AL"){
                        let precioNeto = precio * cantidad;
                        return impuesto(precio,cantidad,eCodigo) + precioNeto;
                    } 
                                  
                }            
            }       
        } 
    }
    
}

export default totalizador;