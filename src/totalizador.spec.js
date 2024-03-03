import totalizador from "./totalizador";

describe("Totalizador", () => {
  it("deberia mostrar el precio neto (2) a partir de la cant y precio", () => {
    expect(totalizador(1,2, "CA", "Varios")).toEqual(2.165);
  });

  it("Deberia mostrar el precio neto con el impuesto aplicado a CA", () =>{
    expect(totalizador(1,2, "CA", "Varios")).toEqual(2.165);
  });
  it("Deberia mostrar el precio neto con el impuesto aplicado a otro Codigo de Estado", () =>{
    expect(totalizador(1,2, "TX", "Varios")).toEqual(2.125);
    expect(totalizador(1,2, "AL", "Varios")).toEqual(2.08);
    expect(totalizador(1,2, "UT", "Varios")).toEqual(2.133);
    expect(totalizador(1,2, "NV", "Varios")).toEqual(2.16);
  });

  // Deberia mostrar un descuento del 3% para una cantidad de 1000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 3% para una cantidad de 1000", () =>{
    expect(totalizador(1, 1000, "CA", "Varios")).toEqual(1052.5);
  });

  // Deberia mostrar un descuento del 5% para una cantidad de 3000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 5% para una cantidad de 3000", () =>{
    expect(totalizador(2, 3000, "TX", "Varios")).toEqual(6075);
  });

  // Deberia mostrar un descuento del 7% para una cantidad de 7000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 7% para una cantidad de 7000", () =>{
    expect(totalizador(3, 7000, "NV", "Varios")).toEqual(21210);
  });

  // Deberia mostrar un descuento del 10% para una cantidad de 10000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 10% para una cantidad de 10000", () =>{
    expect(totalizador(4, 10000, "UT", "Varios")).toEqual(38660);
  });

  // Deberia mostrar un descuento del 15% para una cantidad de 30000, un precio X y tambien un estado X
  it("Deberia mostrar el monto total con el descuento del 15% para una cantidad de 30000", () =>{
    expect(totalizador(4, 30000, "AL", "Varios")).toEqual(106800);
  });

  it("Deberia mostrar el precio neto con el impuesto para la categoria default (Varios)", () =>{
    expect(totalizador(1, 100, "AL","Varios")).toEqual(104);
  });

  it("Deberia mostrar el precio neto con el impuesto por categoria(Bebidas alcholicas)", () =>{
    expect(totalizador(1, 100, "AL","Bebidas alcholicas")).toEqual(111);
  });

  it("Deberia mostrar el precio neto con el impuesto por categoria(Muebles)", () =>{
    expect(totalizador(1, 100, "AL","Muebles")).toEqual(107);
  });

  it("Deberia mostrar el precio neto con el impuesto por categoria(Electronicos)", () =>{
    expect(totalizador(1, 100, "AL","Electronicos")).toEqual(108);
  });

  it("Deberia mostrar el precio neto con el impuesto por categoria(Vestimenta)", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta")).toEqual(106);
  });

  // Descuento adicional por categoria
  it("Deberia devolver el precio neto con el descuento adicional por categoria ALIMENTOS (2%)", () =>{
    expect(totalizador(1, 100, "AL","Alimentos")).toEqual(102);
  });

  it("Deberia devolver el precio neto con el descuento adicional por categoria Bebidas Alcoholicas(0%)", () =>{
    expect(totalizador(2, 1000, "UT","Bebidas alcholicas")).toEqual(2213);
  });

  it("Deberia devolver el precio neto con el descuento adicional por categoria Material De Escritorio", () =>{
    expect(totalizador(3, 3000, "TX","Material de escritorio")).toEqual(8977.5);
  });
});

