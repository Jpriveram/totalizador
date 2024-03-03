function catimpuesto (categoria){
    if (categoria === "Bebidas alcholicas") {
        return 7.00
    } else 
    {
        if (categoria === "Muebles") {
            return 3.00
        } else 
        {
            if (categoria === "Electronicos") {
                return 4.00
            } else 
            {
                if (categoria === "Vestimenta") {
                    return 2.00
                } else 
                {
                    return 0.00
                }
            }
        }
    }
}
export default catimpuesto;