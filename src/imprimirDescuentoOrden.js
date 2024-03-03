function imprimirDescuentoOrden(cantidadOrden){
    if(cantidadOrden === 1000){
        return "3%";
    }
    else if(cantidadOrden === 3000){
        return "5%";
    }
    else if(cantidadOrden === 7000){
        return "7%"
    }
    else if(cantidadOrden === 10000){
        return "10%"
    }
    else if(cantidadOrden === 30000){
        return "15%"
    }
    else{
        return "0%"
    }
}

export default imprimirDescuentoOrden;