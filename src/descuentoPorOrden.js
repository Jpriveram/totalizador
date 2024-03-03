function descuentoPorOrden(cantOrden, precioNeto){
    if(cantOrden === 1000){
        return precioNeto * 0.03;
    }
    else if(cantOrden === 3000){
        return precioNeto * 0.05;
    }
    else if(cantOrden === 7000){
        return precioNeto * 0.07;
    }
    return 0;
}

export default descuentoPorOrden;