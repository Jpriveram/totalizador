function imprimirDescAdicCat(categoria){
    if(categoria === "Alimentos"){
        return "2%";
    }
    else if(categoria === "Bebidas alcholicas"){
        return "0%";
    }
    else if(categoria === "Material de escritorio"){
        return "1.5%";
    }
    else{
        return "0%";
    }
}

export default imprimirDescAdicCat;