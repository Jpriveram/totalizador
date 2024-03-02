function codimpuesto (estado){
    if (estado === "CA") {
        return "(8.25%): "
    } else 
    {
        if (estado === "NV") {
            return "(8.00%): "
        } else 
        {
            if (estado === "UT") {
                return "(6.65%): "
            } else {
                if (estado === "TX") {
                    return "(6.25%): "
                } else 
                {
                    if (estado === "AL") {
                        return "(4.00%): "
                    } else {
                        
                    }
                }
            }
        }
    }
}
export default codimpuesto;