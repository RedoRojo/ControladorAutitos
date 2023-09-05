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

  it("Deberia retornar false al validar la coordenada: 3,3,324", () => {
    let controlador = new Controlador();
    expect(controlador.validarCoordenada("3,3,324")).toEqual(false); 
  }); 

  it("Deberia retornar false al validar la coordenada: 1923,32B", () => {
    let controlador = new Controlador();
    expect(controlador.validarCoordenada("1923,32B")).toEqual(false); 
  }); 

  it("Deberia retornar true al validar la coordenada: 1923,3232N", () => {
    let controlador = new Controlador();
    expect(controlador.validarCoordenada("1923,3232N")).toEqual(true); 
  }); 

  it("Deberia retornar false al validar la coordenada: fdadfas", () => {
    let controlador = new Controlador();
    expect(controlador.validarCoordenada("fdadfas")).toEqual(false); 
  }); 

  it("Deberia reconocer la parte de comandos de la entrada: 2,2N/AAAII", () => {
    let controlador = new Controlador();
    expect(controlador.obtenerSecuenciaDeComandos("2,2N/AAAII")).toEqual("AAAII"); 
  }); 

  it("Deberia reconocer la parte de comandos de la entrada: 2,2N/AAI", () => {
    let controlador = new Controlador();
    expect(controlador.obtenerSecuenciaDeComandos("2,2N/AAI")).toEqual("AAI"); 
  }); 
  
  it("Deberia reconocer la coordenada inicial de al cadena de entrada: 2,2N/AAI", () => {
    let controlador = new Controlador();
    expect(controlador.obtenerCoordenadaInicial("/2,2N/AAI")).toEqual("2,2N"); 
  }); 
  
  it("Deberia retornar true al validar la secuencia de comandos: IAA", () => {
    let controlador = new Controlador();
    expect(controlador.validarSecuencia("IAA")).toEqual(true); 
  }); 
  
  it("Deberia retornar false al validar la secuencia de comandos: IAAU", () => {
    let controlador = new Controlador();
    expect(controlador.validarSecuencia("IAAU")).toEqual(false); 
  }); 
  
  it("Deberia retornar true al validar la secuencia de comandos: IAAD", () => {
    let controlador = new Controlador();
    expect(controlador.validarSecuencia("IAAD")).toEqual(true); 
  }); 

  it("Deberia retornar false al validar la secuencia de comandos: IAADfds", () => {
    let controlador = new Controlador();
    expect(controlador.validarSecuencia("IAADfds")).toEqual(false); 
  }); 

});
