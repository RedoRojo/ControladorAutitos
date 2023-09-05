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

  it("Deberia devolver false al no reconocer el primer numero de la coordenada inicial: a,2N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaX("a,2N")).toEqual(false);
  });

  it("Deberia reconocer el primer numero de la coordenada inicial: 10,2N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaX("10,2N")).toEqual(10);
  });

  it("Deberia reconocer el segundo numero de la coordenada: 10,2N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaY("10,2N")).toEqual(2);
  });

  it("Deberia reconocer el segundo numero de la coordenada: 10,3N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaY("10,3N")).toEqual(3);
  });

  it("Deberia reconocer el segundo numero de la coordenada: 10,10N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaY("10,10N")).toEqual(10);
  });

  it("Deberia devolver false al no reconocer el segundo numero de la coordenada: 10,fdaN", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerCoordenaY("10,fadN")).toEqual(false);
  });

  it("Deberia reconocer la direccion de la coordenada: 3,3N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerDireccion("3,3N")).toEqual("N");
  });

  it("Deberia reconocer la direccion de la coordenada: 3,3E", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerDireccion("3,3E")).toEqual("E");
  });

  it("Deberia reconocer la direccion de la coordenada: 3,3S", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerDireccion("3,3S")).toEqual("S");
  });

  it("Deberia devolver false al no reconocer un direccion valida para la coordenanda: 2,2F", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerDireccion("2,2F")).toEqual(false);
  });

  it("Deberia reconocer la direccion de la coordenada: 3,3O", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerDireccion("3,3O")).toEqual("O");
  });

  it("Deberia reconocer la direccion de la coordenada: 3,3N", () => {
    let controlador = new Controlador(); 
    expect(controlador.obtenerDireccion("3,3N")).toEqual("N");
  });

  it("Deberia retornar true si la coordena 3,3N es valida y false si no es valida", () => {
    let controlador = new Controlador();
    expect(controlador.validarCoordenada("3,3N")).toEqual(true); 
  }); 

});
