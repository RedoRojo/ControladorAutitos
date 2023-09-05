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

  it("Deberia reconocer las dimensiones de la superficie en la cadena de entrada 5,5/2,2N/IIA", () => {
    let controlador = new Controlador();
    expect(controlador.obtenerDimensiones("5,5/2,2N/IIA")).toEqual("5,5"); 
  }); 

  it("Deberia reconocer las dimensiones de la superficie en la cadena de entrada 3,3/2,2N/IIA", () => {
    let controlador = new Controlador();
    expect(controlador.obtenerDimensiones("3,3/2,2N/IIA")).toEqual("3,3"); 
  }); 

  it("Deberia retonar true al validar las dimensiones de la superficie: 2,2", () => {
    let controlador = new Controlador(); 
    expect(controlador.validarDimensiones("2,2")).toEqual(true); 
  });

  it("Deberia retonar true al validar las dimensiones de la superficie: 2a", () => {
    let controlador = new Controlador(); 
    expect(controlador.validarDimensiones("2a")).toEqual(false); 
  });

  it("Deberia retonar false al validar las dimensiones de la superficie: 2a,2", () => {
    let controlador = new Controlador(); 
    expect(controlador.validarDimensiones("2a,2")).toEqual(false); 
  });

  it("Deberia retonar false al validar las dimensiones de la superficie: 2,3a", () => {
    let controlador = new Controlador(); 
    expect(controlador.validarDimensiones("2,3a")).toEqual(false); 
  });

  it("Deberia ejecutar el comando I sobre la posicion 2,2N", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoI("2,2N")).toEqual("2,2O"); 
  });

  it("Deberia ejecutar el comando I sobre la posicion 2,2E", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoI("2,2E")).toEqual("2,2N"); 
  });

  it("Deberia ejecutar el comando I sobre la posicion 2,2S", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoI("2,2S")).toEqual("2,2E"); 
  });

  it("Deberia ejecutar el comando I sobre la posicion 2,2O", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoI("2,2O")).toEqual("2,2S"); 
  });
   
  it("Deberia ejecutar el comando D sobre la posicion 3,3N", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoD("3,3N")).toEqual("3,3E"); 
  });
  
  it("Deberia ejecutar el comando D sobre la posicion 3,3E", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoD("3,3E")).toEqual("3,3S"); 
  });

  it("Deberia ejecutar el comando A sobre la posicion 3,3E", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoA("3,3E")).toEqual("4,3E"); 
  });

  it("Deberia ejecutar el comando A sobre la posicion 3,3N", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoA("3,3N")).toEqual("3,4N"); 
  });

  it("Deberia ejecutar el comando A sobre la posicion 3,3O", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoA("3,3O")).toEqual("2,3O"); 
  });

  it("Deberia ejecutar el comando A sobre la posicion 3,3S", () => {
    let controlador = new Controlador(); 
    expect(controlador.ejecutarComandoA("3,3S")).toEqual("3,2S"); 
  });

  it("Deberia ignorar el comando A sobre la posicion 3,0S", () => {
    let controlador = new Controlador("4,4/0,0N/IAA"); 
    expect(controlador.ejecutarComandoA("3,0S")).toEqual("3,0S"); 
  });

  it("Deberia ignorar el comando A sobre la posicion 3,3N en una superficie de 3,3", () => {
    let controlador = new Controlador("3,3/0,0N/IAA"); 
    expect(controlador.ejecutarComandoA("3,3N")).toEqual("3,3N"); 
  });
});
