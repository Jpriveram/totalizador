function descuentoAdicionalCat(categoria, precioNeto){
    if(categoria === "Alimentos"){
        return precioNeto * 0.02;
    }
    else if(categoria === "Bebidas alcholicas"){
        return 0;
    }
    else if(categoria === "Varios"){
        return 0;
    }
    return 0;
}
export default descuentoAdicionalCat;