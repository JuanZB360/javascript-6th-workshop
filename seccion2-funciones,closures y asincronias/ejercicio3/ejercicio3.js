//Ejercicio #3 closures o cierres son funciones que almancenan otras funciones, estas funciones internas tienen axceso a las variables externas y almancenanreferencias de estas
console.log("Ejercicio #3");
function crearSumador(num1){
    function suma(num2){
        return num1+num2;
    };
    return suma;
};

let sumarcinco = crearSumador(5);
console.log(sumarcinco(3));
let sumardos = crearSumador(2);
console.log(sumardos(2));
console.log(sumarcinco(8));
console.log(sumardos(7));

/**
 * ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
 * las funciones internas tiene  axceso a las variables externas aunque estas hayan terminado de ejecutarse el cierre se termina cuando las funciones internas retornan un valor a las funciones externas.
 * ¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
 * el problema que se puede generar por mantener estos closures si se crean muchas instancias de funciones es que puede ocacionar fugas de memoria ya que se pueden estar guardando referencias de datos que ya no se necesitan y estan ocupando espacio en memoria.
 */
