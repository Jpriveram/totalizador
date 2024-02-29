import totalizador from "./totalizador";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto (2)a partir de la cant y precio", () => {
    expect(totalizador(1,2)).toEqual(2);
  });

  it("Deberia mostrar el precio neto con el impuesto aplicado a CA", () =>{
    expect(totalizador(1,2, "CA")).toEqual(2.175);
  });
});
