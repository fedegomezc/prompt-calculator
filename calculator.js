/* CALCULADORA QUE FUNCIONA INGRESANDO UN TEXTO CON LAS OPERACIONES DESEADAS
Se utilzan expresiones regulares (REGEX) para identificar y resolver las operaciones */

// Features: Validación ingreso por consola. Se modifica regexOperación utilizando '*' para tomar todo caso posible.
// TODO: crear otra funcion que haga las operaciones, ya que se repite al buscar más operaciones
// TODO: Contemplar valores negativos y flotantes
// TODO: Contemplar casos como: 'Dividir la suma de 5 y 7 por 3.


function calculadora(cadena) {
  const regexOperacion = /(suma*|resta*|divi*|multiplica*)/i;
  const regexNumeros = /(\d+)\D+(\d+)/i;
  let result = null;
  const error1 = 'error';
  const error2 = 'No se encontraron operaciones matemáticas a realizar, intente de nuevo';


  const buscarPrimerOperacion = (cadena) => {
    const matchesOperacion = cadena.match(regexOperacion);
    const matchesNumeros = cadena.match(regexNumeros);
    // console.log(matchesNumeros);

    if (matchesOperacion && matchesNumeros) {
      const operacion = matchesOperacion[0];
      const num1 = parseFloat(matchesNumeros[1]);
      const num2 = parseFloat(matchesNumeros[2]);
      // console.log(num1, num2);
      
      
      if (/suma|sumar/i.test(operacion)) {
        result = num1 + num2;
      } else if (/resta|restar/i.test(operacion)) {
        result = num1 - num2;
      } else if (/division|dividir/i.test(operacion)) {
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = error1;
        }
      } else if (/multiplicacion|multiplicar/i.test(operacion)) {
        result = num1 * num2;
      }

      cadena = cadena.replace(matchesOperacion[0], "").replace(matchesNumeros[0], "");
      // console.log(cadena)
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
      const numero = parseFloat(matchesNumero[1]);

      if (/suma|sumar/i.test(operacion)) {
        result += numero;
      } else if (/resta|restar/i.test(operacion)) {
        result -= numero;
      } else if (/division|dividir/i.test(operacion)) {
        if (numero !== 0) {
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
  if (result !== error1 || error2) {
    buscarSiguienteOperacion(cadenaNueva);
  }

  return result;
}

if(!process.argv[2]){
  console.log("No enviaste ningún texto")
  process.exit(1)
}

const cadena = process.argv[2];
const resultado = calculadora(cadena);
console.log(resultado); 