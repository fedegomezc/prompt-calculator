/* CALCULADORA QUE FUNCIONA INGRESANDO UN TEXTO CON LAS OPERACIONES DESEADAS
Se utilzan expresiones regulares (REGEX) para identificar y resolver las operaciones */

function calculadora(cadena) {
  const regexOperacion = /(suma|sumar|resta|restar|division|dividir|multiplicacion|multiplicar)/i;
  const regexNumeros = /(\d+)\D+(\d+)/i;   
  let result = null;
  const error1 = 'error';
  const error2 = 'No se encontraron operaciones matemáticas a realizar, intente de nuevo';


  const buscarPrimerOperacion = (cadena) => {
    const matchesOperacion = cadena.match(regexOperacion);
    const matchesNumeros = cadena.match(regexNumeros);

    if (matchesOperacion && matchesNumeros) {
      const operacion = matchesOperacion[0];
      const num1 = parseInt(matchesNumeros[1]);
      const num2 = parseInt(matchesNumeros[2]);

      if (/suma|sumar/i.test(operacion)) {
        result = num1 + num2;
      } else if (/resta|restar/i.test(operacion)) {
        result = num1 - num2;
      } else if (/division|dividir/i.test(operacion)) {
        if (num2 !== 0){
          result = num1 / num2;
        } else {
          result = error1;
        }
      } else if (/multiplicacion|multiplicar/i.test(operacion)) {
        result = num1 * num2;
      }

      cadena = cadena.replace(matchesOperacion[0], "").replace(matchesNumeros[0], "");
    } else {
      result = error2;
    }

    return cadena;
  }

  const buscarSiguienteOperacion = (cadenaNueva) => {
    while (true) {
      const regexNumero = /(\d+)/
      const matchesOperacion = cadenaNueva.match(regexOperacion);
      const matchesNumero = cadenaNueva.match(regexNumero);
  
      if (!matchesOperacion || !matchesNumero) {
        break;
      }
      const operacion = matchesOperacion[0];
      const numero = parseInt(matchesNumero[1]);
  
      if (/suma|sumar/i.test(operacion)) {
        result += numero;
      } else if (/resta|restar/i.test(operacion)) {
        result -= numero;
      } else if (/division|dividir/i.test(operacion)) {
        if (numero !== 0){
          result /= numero;
        } else {
           result = 'error';
           break
          }
      } else if (/multiplicacion|multiplicar/i.test(operacion)) {
        result *= numero;
      }
  
      cadenaNueva = cadenaNueva.replace(matchesOperacion[0], "").replace(matchesNumero[0], "");
    }
  }
  
  let cadenaNueva = buscarPrimerOperacion(cadena);
  if (result !== error1 || error2 ){
    buscarSiguienteOperacion(cadenaNueva);
  }

  return result;
}

// Ejemplo de uso
const cadena = "sumar 7 y 13 ";
const resultado = calculadora(cadena);
console.log(resultado); 