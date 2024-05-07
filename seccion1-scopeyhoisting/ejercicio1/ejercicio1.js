console.log(`
var globalVariable = "Soy una variable global."\n
function testScope() {\n

  var functionVariable = "Soy una variable local.";\n
  if (true) {\n

    let blockVariable = "Soy una variable de bloque.";\n
    console.log("Dentro del bloque:", blockVariable);\n
  }\n
  console.log("Dentro de la función:", functionVariable);\\n
}\n
console.log("Fuera de la función:", globalVariable);testScope();\n \n`);

alert("lee el codigo que esta escrito en la consola y responde las siguientes preguntas.")

let buenas = 0, malas=0;

let pregunta1 = prompt(`¿Se puede acceder a globalVariable  por fuera de la funcion testscope?
1- Si
2- No`);
console.log(`¿Se puede acceder a globalVariable  por fuera de la funcion testscope?
1- Si     2- No`);
console.log(`Tu respuesta ${pregunta1}`);
if(pregunta1 == 1){
    buenas++;
    console.log("bien hecho. esta variable es global y esta declarada por fuera de la funcion por tanto puedes accerder a ella por fuera de la funcion en otras partes del codigo.");
    alert("bien hecho. esta variable es global y esta declarada por fuera de la funcion por tanto puedes accerder a ella por fuera de la funcion en otras partes del codigo.");
}else{
    malas++;
    console.log("Estas equivocad@ esta variable es global y esta declara por fuera de la funcion, no solo puedes acceder a ella dentro de la funcion si no tambien por fuera.");
    alert("Estas equivocad@ esta variable es global y esta declara por fuera de la funcion, no solo puedes acceder a ella dentro de la funcion si no tambien por fuera.");
};

let pregunta2 = prompt(`¿puedes acceder a la variable functionvariable dentro del condicional if que hay en la funcion?
1- Si     2- No`);
console.log(pregunta2);
if(pregunta2 == 1){
    buenas++;
    console.log("correcto, esta variable esta declarada dentro de la funcion como global puedes acceder a ella en cualquier parte dentro de la funcion.");
    alert("correcto, esta variable esta declarada dentro de la funcion como global puedes acceder a ella en cualquier parte dentro de la funcion.");
}else{
    malas++;
    console.log("estas equivocad@ esta variable esta declarada dentro de la funcion y se puede acceder a ella en cual quier parte solo dentro de la funcion.");
    alert("estas equivocad@ esta variable esta declarada dentro de la funcion y se puede acceder a ella en cual quier parte solo dentro de la funcion.");
};
let pregunta3 = prompt("En que parte del codigo se puede acceder a la variable blockvariable: 1- solo en la funcion\n 2- tanto por fuera como por dentro del condicional if\n 3- solo dentro del condicional if.\n");
if(pregunta3 == 1){
    malas++;
    console.log("estas equivocado esta funcion es de bloque y esta declara dentro del condicional if dentro de la funcion a esta variable solo se le puede acceder dintro del condicional if.");
    alert("estas equivocado esta funcion es de bloque y esta declara dentro del condicional if dentro de la funcion a esta variable solo se le puede acceder dintro del condicional if.");
}else if(pregunta3 == 2){
    malas++;
    console.log("estas aquivocad@ esta es una variablede bloque y esta declarada dentro del condicional if, a esta variable no podemos acceder por fuera del bloque donde fue declarada.");
    alert("estas aquivocad@ esta es una variablede bloque y esta declarada dentro del condicional if, a esta variable no podemos acceder por fuera del bloque donde fue declarada.");
}else if(pregunta3 == 3){
    buenas++;
    console.log("correcto solo se puede acceder a esta variable adentro del condicional if ya que esta declara dentro de este bloque y tiene un scope local");
    alert("correcto solo se puede acceder a esta variable adentro del condicional if ya que esta declara dentro de este bloque y tiene un scope local");
}

console.log(`tuviste ${buenas} buenas y ${malas} malas.`);
alert(`tuviste ${buenas} buenas y ${malas} malas.`);
