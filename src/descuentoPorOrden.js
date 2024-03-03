function descuentoPorOrden(cantidadOrden, precioNeto){
    if(cantidadOrden >= 1000 && cantidadOrden <= 2999){
        return precioNeto * 0.03;
    }
    else if(cantidadOrden >= 3000 && cantidadOrden <= 6999){
        return precioNeto * 0.05;
    }
    else if(cantidadOrden >= 7000 && cantidadOrden <= 9999){
        return precioNeto * 0.07;
    }
    else if(cantidadOrden >= 10000 && cantidadOrden <= 29999){
        return precioNeto * 0.10;
    }
    else if(cantidadOrden >= 30000){
        return precioNeto * 0.15;
    }
    return 0;
}

export default descuentoPorOrden;