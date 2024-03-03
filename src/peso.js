function envio(peso,cantidad) {
    if (peso >=10 && peso<=20) {
        const costoenvio = 3.5;
        return cantidad * costoenvio
        
    } else {
        return 0
    }

}

export default envio;