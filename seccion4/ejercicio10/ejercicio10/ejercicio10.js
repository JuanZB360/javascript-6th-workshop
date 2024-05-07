console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");

/**
 * ¿Qué tareas se consideran macrotareas y cuáles son microtareas?
 * las macrotareas son las setTimeout, y las microtareas son las promesas.
 * 
 * ¿Cómo se relacionan las macrotareas y microtareas con el event loop?
 * las microtareas pasan a la cola de microtask queue y se van ejecutando una a una, cuando se termina de ejecutar la cola de microtareas comienzan ejecutarse las macrotareas que estan en la cola de taskqueue.
 * 
 * ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
 * la microtarea entra en la cola de microtask queue luego pasa al callstak y la macrotarea que esta adentro pasa a la cola de macrotareas en la task queue y luego se de estar en la fila de macrotareas pasa al callstak para ejecutarse.
 * 
 * ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
 * las promesas se toman como microtareas pasan a la cola en microtask queue y por prioridad se ejecutan primero las promesas, los setTimeout se toman como macrotareas y pasan a la cola de task queue y se ejecutan una vez la cola de microtask queue este vacia.
 */