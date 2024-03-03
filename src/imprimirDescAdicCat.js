function imprimirDescAdicCat(categoria){
    if(categoria === "Alimentos"){
        return "2%";
    }
    else if(categoria === "Bebidas alcholicas"){
        return "0%";
    }
    else{
        return "0%";
    }
}

export default imprimirDescAdicCat;