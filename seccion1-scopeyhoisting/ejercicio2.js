console.log(`// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`)

let buenas = 0, malas = 0;

let pregunta4 = prompt(`que resultado dara en consola:\n 
console.log("Valor de a:", a);\n
var a = 1;\n
1- undefined   2- before inicialization   3- 1
`)
if(pregunta4 == 1){
    buenas++
    console.log("correcto var es una variable global y el hoisting sube el scope como undefined hasta que es inicializada");
    alert("correcto var es una variable global y el hoisting sube el scope como undefined hasta que es inicializada");
}else if(pregunta4 ==2){
    malas++;
    console.log("incorrecto cuando una variable es var tiene un scope global y hoisting la sube como undefined");
    alert("incorrecto cuando una variable es var tiene un scope global y hoisting la sube como undefined");
}else if(pregunta4 == 3){
    malas++;
    console.log("Incorrecto, el hoisting toma la variable declarada como var por se de scope global pero mientras se inicializa esta variable le asigna un valor undefined");
    alert("Incorrecto, el hoisting toma la variable declarada como var por se de scope global pero mientras se inicializa esta variable le asigna un valor undefined");
}

let pregunta5 = prompt(`que resultado dara en consola:\n
console.log("Valor de b:", b);\n
let b = 2;\n
1- before inicialization   2-undefined`);
if(pregunta5 == 1){
    buenas++;
    console.log(`correcto, la variable let tiene un scope local asi que el hoisting la toma como before inicialization ya que solo se puede acceder a ella despues de que es declarada.`);
    alert(`correcto, la variable let tiene un scope local asi que el hoisting la toma como before inicialization ya que solo se puede acceder a ella despues de que es declarada.`);
}else if(pregunta5 == 2){
    malas++;
    console.log(`incorrecto, la variable let no puede ser llamada antes de ser declarada puesto que tiene un scope local solo puede accerderse a ella despues de ser declarada`);
    alert(`incorrecto, la variable let no puede ser llamada antes de ser declarada puesto que tiene un scope local solo puede accerderse a ella despues de ser declarada`);
}

let pregunta6 = prompt(`que resultado dara en consola:\n
console.log("Valor de c:", c);\n
const c = 3;\n
1- before inicialization   2-undefined`);
if(pregunta6 == 1){
    buenas++;
    console.log(`correcto, la variable const tiene un scope local asi que el hoisting la toma como before inicialization ya que solo se puede acceder a ella despues de que es declarada.`);
    alert(`correcto, la variable const tiene un scope local asi que el hoisting la toma como before inicialization ya que solo se puede acceder a ella despues de que es declarada.`);
}else if(pregunta6 == 2){
    malas++;
    console.log(`incorrecto, la variable const no puede ser llamada antes de ser declarada puesto que tiene un scope local solo puede accerderse a ella despues de ser declarada`);
    alert(`incorrecto, la variable const no puede ser llamada antes de ser declarada puesto que tiene un scope local solo puede accerderse a ella despues de ser declarada`);
}

let pregunta7 = prompt(`que resultado dara en consola:\n
console.log("Resultado de funcionDeclarada:", funcionDeclarada());\n

function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}\n

1- Funcion declarada ha sido llamada   2-undefined`);
if(pregunta7 == 1){
    buenas++;
    console.log(`correcto, la funcion declarada tiene un scope global asi que el hoisting toma una referencia de ella y la guarda en un espacio en memoria y si se llama antes de que sea declarada puede utilizarse.`);
    alert(`correcto, la funcion declarada tiene un scope global asi que el hoisting toma una referencia de ella y la guarda en un espacio en memoria y si se llama antes de que sea declarada puede utilizarse.`);
}else if(pregunta7 == 2){
    malas++;
    console.log(`incorrecto, la funcion declara al ser tomada por el hoisting se guarda una referencia de ella para ser utilizadacuando no la llamen, esta no se guarda con un valor vacio sino que se guarda con una referencia igual a esta.`);
    alert(`incorrecto, la funcion declara al ser tomada por el hoisting se guarda una referencia de ella para ser utilizadacuando no la llamen, esta no se guarda con un valor vacio sino que se guarda con una referencia igual a esta.`);
}


let pregunta8 = prompt(`que resultado dara en consola:\n
console.log("Resultado de funcionExpresada:", funcionExpresada());

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};\n

1- Funcion expresadada ha sido llamada   2- before inicialization`);
if(pregunta8 == 2){
    malas++;
    console.log(`correcto, la funcion expresada no pueden ser llamadas antes de ser declaras el hoisting lo toma pero como este tiene un scope local le da un valor de before inicialization.`);
    alert(`correcto, la funcion expresada no pueden ser llamadas antes de ser declaras el hoisting lo toma pero como este tiene un scope local le da un valor de before inicialization.`);
}else if(pregunta8 == 1){
    buenas++;
    console.log(`incorrecto, la funcion no puede ser llamada antes de ser declara ya que esta tiene un scope local.`);
    alert(`incorrecto, la funcion no puede ser llamada antes de ser declara ya que esta tiene un scope local.`);
}
