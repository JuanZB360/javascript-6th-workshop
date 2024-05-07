

//ejercicio #5 promesas y callbacs en accion
// Operación síncrona

console.log("\nejercicio de asincronia\n.");

function manejarAsincronia (call, promise){
    promise.then(call).catch(() => {
        console.log("Promesa rechazada");
        call(num);
    })
};

function callback(nume) {
    console.log("estoy en el callback");
    console.log( nume*20);
};

const promise =  new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("estoy en la promesa.");
        let num = 20+20;
        resolve(num);
    }, 5000);
});



manejarAsincronia(callback, promise);

/**
 * ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
 * al cambiar el tiempo de resolucion la promesa se tarda menos en devolver una respuesta.
 * 
 * ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
 * cuando la promesa es resuleta me envia el resultado pormedio del then al no ser resuelta la respuesta es tratada por medio del catch que maneja los errores
 * 
 * ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
 * si puedo puedo hacer que dependiendo que resultado me de la promesa el callback pueda realizar diferentes funciones.
 */


