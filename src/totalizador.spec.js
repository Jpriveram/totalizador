import totalizador from "./totalizador";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto (2)a partir de la cant y precio", () => {
    expect(totalizador(1,2)).toEqual(2);
  });

  it("Deberia mostrar el precio neto con el impuesto aplicado a CA", () =>{
    expect(totalizador(1,2, "CA")).toEqual(2.165);
  });
  it("Deberia mostrar el precio neto con el impuesto aplicado a otro Codigo de Estado", () =>{
    expect(totalizador(1,2, "TX")).toEqual(2.125);
    expect(totalizador(1,2, "AL")).toEqual(2.08);
    expect(totalizador(1,2, "UT")).toEqual(2.133);
    expect(totalizador(1,2, "NV")).toEqual(2.16);

  });
});
