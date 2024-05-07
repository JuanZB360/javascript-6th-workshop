// evenr loop y web APIs

console.log("mesaje 1: inmediatamenete");

setTimeout(() => {
    console.log("mensaje 2: stTimeout de 0 seg.")
}, 0);
setTimeout(() => {
    console.log("mensaje 3: setTimeout de 1 seg.")
}, 1000);

/**
 * ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
 * porque en la ejecucion en el event loop el mensaje 1 entra al Callstack y se ejecuta mientras que el mensaje 2 entra a la Web APIs y solo se ejecuta cuando el Callstack este vacio.
 * 
 * ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
 * java script ejecuta principalmente en el callstack las micro tareas ya que es el hilo de ejecucion sincronico donde se ejecuta uno detras de otro al entrar callbacks, promise y asynk/away javascript los pasa a la Web APIs en donde se resolveran y cuando tengan la respuesta de la petioncion pasaran a la cola de macro tareas y si no hay micro tareas pasaran al callstack.
 *  
 */