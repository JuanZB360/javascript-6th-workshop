//Ejercicio #4 funciones declaradas y funciones expresadas
console.log("\nEjercicio #4\n.");
console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());

  /**
   * ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
   * al llamar las funcion declarada esta pudo ejecutarse y devolver un resultado 
   * al llemar la funcion expresada arrojo un before inicizlization  
   * 
   * ¿Cómo difieren los resultados entre la función declarada y la función expresada?
   * la diferencia entre estas funciones es el scope que tienen ambas mientras la funcion declarada tiene un scope global la funcion expresada tiene un scope local y esto limita el alcanse de cada una.
   * 
   * ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
   * las funciones declaradas tiene un scope global y el hoisting guarda una referencia de estas antes de ejecutar el codigo y asi poder ejecutarlas si las llaman antes de ser declaradas.
   * las funciones expresadas estas no puedes utilizarse antes de que sean declaradas ya que tienen un scope local y el hoistin las toma pero con un valor before inicialization.
   */

