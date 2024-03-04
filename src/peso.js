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
         if (peso >=41 && peso<=80) {
            const costoenvio = 6;
            return cantidad * costoenvio
            } else 
            {
            if (peso >=81 && peso<=100) {
                 const costoenvio = 6.5;
                return cantidad * costoenvio
                } else 
                {
                if (peso >=101 && peso<=200) {
                    const costoenvio = 8;
                     return cantidad * costoenvio
                        
                    } else 
                    {
                    if (peso >200) {
                        const costoenvio = 9;
                        return cantidad * costoenvio
                        } else 
                        {
                            return 0
                        }
                    }
                }
            }
        }
    }

}

export default envio;