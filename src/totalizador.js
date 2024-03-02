function totalizador(precio,cantidad, eCodigo){
    if(eCodigo === "CA"){
        let precioNeto = precio * cantidad;
        let tax = 0.0825  * precioNeto;
        return tax + precioNeto;
    } 
    else
    {
        if(eCodigo === "NV"){
            let precioNeto = precio * cantidad;
            let tax = 0.08  * precioNeto;
            return tax + precioNeto;
        } 
        else
        {
            if(eCodigo === "UT"){
                let precioNeto = precio * cantidad;
                let tax = 0.0665  * precioNeto;
                return tax + precioNeto;
            } 
            else
            {
                if(eCodigo === "TX"){
                    let precioNeto = precio * cantidad;
                    let tax = 0.0625  * precioNeto;
                    return tax + precioNeto;
                } 
                else{
                    if(eCodigo === "AL"){
                        let precioNeto = precio * cantidad;
                        let tax = 0.04  * precioNeto;
                        return tax + precioNeto;
                    } 
                    else{
                        return precio * cantidad;
                    }                
                }            
            }       
        } 
    }
    
}

export default totalizador;