function totalizador(precio,cantidad, eCodigo){
    if(eCodigo === "CA"){
        let precioNeto = precio * cantidad;
        let tax = 0.0875  * precioNeto;
        return tax + precioNeto;
    } 
    else{
        return precio * cantidad;
    }
    
}

export default totalizador;