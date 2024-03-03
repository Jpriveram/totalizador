function envio(peso,cantidad) {
    if (peso >=10 && peso<=20) {
        const costoenvio = 3.5;
        return cantidad * costoenvio
        
    } else 
    {
     if (peso >=21 && peso<=40) {
        const costoenvio = 5;
        return cantidad * costoenvio
        } else 
        {    
            return 0
        }
    }

}

export default envio;