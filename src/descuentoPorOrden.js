function descuentoPorOrden(cantOrden){
    if(cantOrden === 1000){
        return cantOrden * 0.03;
    }
    else if(cantOrden === 3000){
        return cantOrden * 0.05;
    }
    return 0;
}

export default descuentoPorOrden;