function descuentoEnvio(tipoCliente, precioEnvio){
    if(tipoCliente === "Normal"){
        return 0;
    }
    else if(tipoCliente === "Recurrente"){
        return precioEnvio * 0.005;
    }
    else if(tipoCliente === "Antiguo recurrente"){
        return precioEnvio * 0.01;
    }
    else{
        return 0;
    }
}

export default descuentoEnvio;