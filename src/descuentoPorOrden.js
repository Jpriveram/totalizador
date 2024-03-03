function descuentoPorOrden(cantOrden){
    if(cantOrden === 1000){
        return cantOrden * 0.03;
    }
    return 0;
}

export default descuentoPorOrden;