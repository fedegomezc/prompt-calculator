// Evaluar por orden de precedencia -> 1ero multiplicación y división y luego suma y resta
// Cambiar la validación por test, ya que debo obtener los grupos de operaciones que tenga todo el texto. O formatear las partes para poder usar ese código usando template literals
// testcadena = `{sumar} {num1} y {num2}`
// Primero evaluar match por cada operación y guardar en una variable y luego realizar el condicional para hacer las operaciones


function realizarOperaciones(cadena) {
  const regexOperacion = /(suma|sumar|resta|restar|division|dividir|multiplicacion|multiplicar)/i;
  const regexNumeros = /(\d+)\D+(\d+)/i;

  let result1 = null;

  // Paso 1: Buscar y realizar la primera operación matemática
  const matchesOperacion = cadena.match(regexOperacion);
  if (matchesOperacion) {
    const operacion = matchesOperacion[0];
    const matchesNumeros = cadena.match(regexNumeros);

    if (matchesNumeros) {
      const num1 = parseInt(matchesNumeros[1]);
      const num2 = parseInt(matchesNumeros[2]);

      if (/suma|sumar/i.test(operacion)) {
        result1 = num1 + num2;
      } else if (/resta|restar/i.test(operacion)) {
        result1 = num1 - num2;
      } else if (/division|dividir/i.test(operacion)) {
        result1 = num1 / num2;
      } else if (/multiplicacion|multiplicar/i.test(operacion)) {
        result1 = num1 * num2;
      }

      // Paso 2: Crear nueva cadena eliminando la operación y los números encontrados previamente
      cadena = cadena.replace(matchesOperacion[0], "").replace(matchesNumeros[0], "");
      // console.log(cadena);
    }
  }

  // Paso 3: Buscar y realizar la siguiente operación matemática (si existe)
  while (true) {
    const matchesOperacion = cadena.match(regexOperacion);
    console.log(matchesOperacion);
    const regexNumero = /(\d+)/

    if (!matchesOperacion) {
      break;
    }

    const operacion = matchesOperacion[0];
    const matchesNumeros = cadena.match(regexNumero);
    // console.log(matchesNumeros);

    if (!matchesNumeros) {
      break;
    }

    const numero = parseInt(matchesNumeros[1]);

    if (/suma|sumar/i.test(operacion)) {
      result1 += numero;
    } else if (/resta|restar/i.test(operacion)) {
      result1 -= numero;
    } else if (/division|dividir/i.test(operacion)) {
      result1 /= numero;
    } else if (/multiplicacion|multiplicar/i.test(operacion)) {
      result1 *= numero;
    }

    cadena = cadena.replace(matchesOperacion[0], "").replace(matchesNumeros[0], "");
  }

  return result1 || "No se encontró ninguna operación matemática.";
}

// Ejemplo de uso
const cadena = "Hacer la resta de 10 y 20 y multiplicar por 2 y sumar 5";
const resultado = realizarOperaciones(cadena);
console.log(resultado); 
