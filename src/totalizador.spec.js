//import sumar from "./sumador.js";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto (2)a partir de la cant y precio", () => {
    expect(totalizador(1,2)).toEqual(2);
  });
});

function totalizador(precio,cantidad){
    return precio * cantidad;
}