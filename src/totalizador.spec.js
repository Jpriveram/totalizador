import totalizador from "./totalizador";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto (2) a partir de la cant y precio", () => {
    expect(totalizador(1,2, "CA")).toEqual(2.165);
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

  // Deberia mostrar un descuento del 3% para una cantidad de 1000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 3% para una cantidad de 1000", () =>{
    expect(totalizador(1, 1000, "CA")).toEqual(1052.5);
  });

  // Deberia mostrar un descuento del 5% para una cantidad de 3000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 5% para una cantidad de 3000", () =>{
    expect(totalizador(2, 3000, "TX")).toEqual(6075);
  });

  // Deberia mostrar un descuento del 7% para una cantidad de 7000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 7% para una cantidad de 7000", () =>{
    expect(totalizador(3, 7000, "NV")).toEqual(21210);
  });

  // Deberia mostrar un descuento del 10% para una cantidad de 10000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 10% para una cantidad de 10000", () =>{
    expect(totalizador(4, 10000, "UT")).toEqual(38660);
  });

  // Deberia mostrar un descuento del 15% para una cantidad de 30000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 15% para una cantidad de 30000", () =>{
    expect(totalizador(4, 30000, "AL")).toEqual(106800);
  });

  // COmmit
});
