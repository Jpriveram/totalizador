function descuentosEspeciales(tipoCliente, categoria, precioNeto){
    if(tipoCliente === "Recurrente" && precioNeto > 3000 && categoria === "Alimentos"){
        return 100;
    }
    else if(tipoCliente === "Especial" && precioNeto > 7000 && categoria === "Electronicos")
    {        
        return 200;
    }
    else{
        return 0;
    }
}

export default descuentosEspeciales;