function impuesto(precio,cantidad,codigo) {
    if(codigo === "CA"){
        let precioNeto = precio * cantidad;
        let tax = 0.0825  * precioNeto;
        return tax ;
    } 
    else
    {
        if(codigo === "NV"){
            let precioNeto = precio * cantidad;
            let tax = 0.08  * precioNeto;
            return tax;
        } 
        else
        {
            if(codigo === "UT"){
                let precioNeto = precio * cantidad;
                let tax = 0.0665  * precioNeto;
                return tax ;
            } 
            else
            {
                if(codigo === "TX"){
                    let precioNeto = precio * cantidad;
                    let tax = 0.0625  * precioNeto;
                    return tax ;
                } 
                else{
                    if(codigo === "AL"){
                        let precioNeto = precio * cantidad;
                        let tax = 0.04  * precioNeto;
                        return tax ;
                    } 
                                
                }            
            }       
        } 
    }
    

}
export default impuesto;