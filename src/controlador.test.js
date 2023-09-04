import Controlador from "./controlador";

describe("Coordena Inicial", () => {
  it("Deberia reconocer el primer numero de la coordenada inicial", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaX("3,3E")).toEqual(3);
  });

  it("Deberia reconocer el primer numero de la coordenada inicial: 2,2N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaX("2,2N")).toEqual(2);
  });

});
