/* CALCULADORA QUE FUNCIONA INGRESANDO UN TEXTO CON LAS OPERACIONES DESEADAS
Se utilzan expresiones regulares (REGEX) para identificar y resolver las operaciones */

function calculadora(cadena) {
  const regexOperacion = /(suma|sumar|resta|restar|division|dividir|multiplicacion|multiplicar)/i;
  const regexNumeros = /(\d+)\D+(\d+)/i;   
  let result = null;

  // Paso 1: Buscar y realizar la primera operación matemática
  const matchesOperacion = cadena.match(regexOperacion);       //devuelve un array con la primer operación encontrada en posición [0]
  if (matchesOperacion) {
    const operacion = matchesOperacion[0];
    const matchesNumeros = cadena.match(regexNumeros);        // devuelve un array con la coincidencia en posición [0] y los grupos en las posiciones siguientes [1] y [2]

    if (matchesNumeros) {
      const num1 = parseInt(matchesNumeros[1]);
      const num2 = parseInt(matchesNumeros[2]);

      if (/suma|sumar/i.test(operacion)) {
        result = num1 + num2;
      } else if (/resta|restar/i.test(operacion)) {
        result = num1 - num2;
      } else if (/division|dividir/i.test(operacion)) {
        if (num2 !== 0){
          result = num1 / num2;
        } else { result = 'error'}
      } else if (/multiplicacion|multiplicar/i.test(operacion)) {
        result = num1 * num2;
      }

      // Paso 2: Crear nueva cadena eliminando la operación y los números encontrados previamente
      cadenaNueva = cadena.replace(matchesOperacion[0], "").replace(matchesNumeros[0], "");
      // console.log(cadena);
    }
  } else {
    result = 'No se encontraron operaciones matemáticas a realizar, intente de nuevo'
  }

  // Paso 3: Buscar y realizar la siguiente operación matemática (si existe)
  while (true) {
    if (result === 'error'){
      break;
    }

    const matchesOperacion = cadenaNueva.match(regexOperacion);
    
    if (!matchesOperacion) {
      break;
    }
    const regexNumero = /(\d+)/
    const operacion = matchesOperacion[0];
    const matchesNumeros = cadenaNueva.match(regexNumero);
    // console.log(matchesNumeros);

    if (!matchesNumeros) {
      break;
    }

    const numero = parseInt(matchesNumeros[1]);

    if (/suma|sumar/i.test(operacion)) {
      result += numero;
    } else if (/resta|restar/i.test(operacion)) {
      result -= numero;
    } else if (/division|dividir/i.test(operacion)) {
      if (numero !== 0){
        result /= numero;
      } else { result = 'error'}
    } else if (/multiplicacion|multiplicar/i.test(operacion)) {
      result *= numero;
    }

    cadenaNueva = cadenaNueva.replace(matchesOperacion[0], "").replace(matchesNumeros[0], "");
  }

  return result || "No se encontró ninguna operación matemática.";
}

// Ejemplo de uso
const cadena = "Hacer la suma de 50 y 20 y multiplicar por 2 y dividir por 5, luego restar 2";
const resultado = calculadora(cadena);
console.log(resultado); 