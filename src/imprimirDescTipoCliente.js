function imprimirDescuentoPorTipoCliente(tipoCliente){
    if(tipoCliente === "Normal"){
        return "0%";
    }
    else if(tipoCliente === "Recurrente"){
        return "0.5%";
    }
    else if(tipoCliente === "Antiguo recurrente"){
        return "1%";
    }
    else if(tipoCliente === "Especial"){
        return "1.5%";
    }
    else{
        return "0%";
    }
}

export default imprimirDescuentoPorTipoCliente;