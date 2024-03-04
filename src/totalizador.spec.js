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
    expect(totalizador(1, 100, "AL","Electronicos")).toEqual(107);
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

  it("Deberia devolver el precio neto con el descuento adicional por categoria Material De Escritorio (1.5%)", () =>{
    expect(totalizador(3, 3000, "TX","Material de escritorio")).toEqual(8977.5);
  });

  it("Deberia devolver el precio neto con el descuento adicional por categoria Muebles (0%)", () =>{
    expect(totalizador(70, 20, "CA","Muebles")).toEqual(1557.5);
  });

  it("Deberia devolver el precio neto con el descuento adicional por categoria Electronicos (1%)", () =>{
    expect(totalizador(3, 30000, "NV","Electronicos")).toEqual(86400);
  });

  it("Deberia devolver el precio neto con el descuento adicional por categoria Vestimenta (0%)", () =>{
    expect(totalizador(5, 10000, "AL","Vestimenta")).toEqual(48000);
  });

  it("Deberia mostrar el precio neto mas el precio de envio por peso del 0-10", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta",1)).toEqual(106);
  });

  it("Deberia mostrar el precio neto mas el precio de envio por peso del 11-20", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta",11)).toEqual(456);
  });

  it("Deberia mostrar el precio neto mas el precio de envio por peso del 21-40", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta",30)).toEqual(606);
  });

  it("Deberia mostrar el precio neto mas el precio de envio por peso del 41-80", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta",50)).toEqual(706);
  });

  it("Deberia mostrar el precio neto mas el precio de envio por peso del 81-100", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta",90)).toEqual(756);
  });

  it("Deberia mostrar el precio neto mas el precio de envio por peso del 101-200", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta",200)).toEqual(906);
  });

  it("Deberia mostrar el precio neto mas el precio de envio por pesos mayores a 200", () =>{
    expect(totalizador(1, 100, "AL","Vestimenta",300)).toEqual(1006);
  });

  // Descuento en costo de envio por tipo de cliente
  // Cliente Normal
  it("Deberia mostrar el descuento de envio por tipo de cliente Normal", () =>{
    expect(totalizador(1, 100, "AL", "Vestimenta", 300, "Normal")).toEqual(1006);
  });

  // Cliente Recurrente
  it("Deberia mostrar el descuento de envio por tipo de cliente Recurrente", () =>{
    expect(totalizador(100, 1000, "NV", "Electronicos", 200, "Recurrente")).toEqual(115960);
  });

  // Cliente Antiguo Recurrente
  it("Deberia mostrar el descuento de envio por tipo de cliente Antiguo recurrente", () =>{
    expect(totalizador(5, 15000, "TX", "Muebles", 50, "Antiguo recurrente")).toEqual(163537.5);
  });

  // Cliente Especial
  it("Deberia mostrar el descuento de envio por tipo de cliente Especial", () =>{
    expect(totalizador(5, 15000, "TX", "Muebles", 50, "Especial")).toEqual(163087.5);
  });


  // BENEFICIO POR PRECIO NETO, CATEGORIA Y TIPO DE PRODUCTO QUE COMPREN

  //Recurrente		Mayor a 3000			Alimentos			$ 100
  it("Deberia mostrar el descuento de envio por tipo de cliente Especial", () =>{
    expect(totalizador(4, 1000, "TX", "Alimentos", 50, "Recurrente")).toEqual(9920);
  });

  //Recurrente		Mayor a 3000			Alimentos			$ 100
  it("Deberia mostrar el descuento de envio por tipo de cliente categoria y precio neto especificos", () =>{
    expect(totalizador(1, 7001, "TX", "Electronicos", 1, "Especial")).toEqual(6958.5225);
  });


});

