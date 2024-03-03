function descuentoAdicionalCat(categoria, precioNeto){
    if(categoria === "Alimentos"){
        return precioNeto * 0.02;
    }
    else if(categoria === "Bebidas alcholicas"){
        return 0;
    }
    else if(categoria === "Material de escritorio"){
        return precioNeto * 0.015;
    }
    else if(categoria === "Muebles"){
        return 0;
    }
    else if(categoria === "Electronicos"){
        return precioNeto * 0.01;
    }
    else if(categoria === "Varios"){
        return 0;
    }
    return 0;
}
export default descuentoAdicionalCat;