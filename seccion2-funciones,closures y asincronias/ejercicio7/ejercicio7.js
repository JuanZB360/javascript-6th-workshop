// ejercicio #7

alert(`Mira con atencion el siguiente codigo y analiza su orden de ejecucion`);
console.log(`Mira con atencion el siguiente codigo y analiza su orden de ejecucion`);

alert(`console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");`);
console.log(`console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");\n`);


let primerapregunta = Number(prompt(`Cual es el segundo mensaje en mostrarse en consola:\n
1- primer setTimeout
2- promesa resulta
3- fin del script`));

let segundapregunta = Number(prompt(`Cual es el ultimo mensaje que se imprime en consola:\n
1- promesa resulta
2- segundo setTimeout
3- fin del script`));

let tercerapregunta = Number(prompt(`Cual es el tercer mensaje en consola:\n
1- fin del script
2- segundo  setTimeout
3- promesa resulta`));

let puntos=0;

if(primerapregunta !== 3){
    console.log("PREGUNTA #1...Incorrecto el segundo mensaje que se imprime en consola es el console.log('fin del script') ya que entra directamente al callstck y se ejecuta, las tareas que entrar al Web APIs como las promises y los setTimeout deben esperar que el que las tareas que que estan en la callstack se ejecuten para ellas poder pasar y ejecutarse.");
}else{puntos++;};
if(segundapregunta !== 2){
    console.log("PREGUNTA #2...Incorrecto el ultimo mensaje en imprimirse en consola es el setTimeout 'segundo setTimeout', en orde de ejecucion entrar primero los console.log que ingresan directamente al callstack, en wl ingreso en la Web APIs entran los setTimeout y la promesa pero las primesa tiene mayor prioridad de ejecucion que los setTimeout y se ejecutan estas primero luego se van ejecutando los setTimeout en el orden en que ingresaron.");
}else{puntos++;};
if(tercerapregunta !== 3){
    console.log("PREGUNTA #3...Incorrecto el tercer mensaje en imprimirse en consola el la promesa despues de que se ejecutaran los console.log que entrar directo al callstack a ejecutarse, la promesa tiene mayor prioridad que los setTimeout en la Web APIs por esto se ejecuta de tercera luego de los dos console.log\n")
}else{puntos++;};

if(puntos == 3){
    alert("FELICIDADES RESPONDISTE DE MANERA EXCEPCIONAL")
};

console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");