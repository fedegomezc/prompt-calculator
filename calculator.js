function calcularOperacion(cadena) {
    // Expresiones regulares para identificar las operaciones
    const sumaRegex = /suma de (\d+) y (\d+)/i;
    const restaRegex = /resta de (\d+) y (\d+)/i;
    const multiplicacionRegex = /multiplicacion de (\d+) y (\d+)/i;
    const divisionRegex = /division de (\d+) y (\d+)/i;
  
    let resultado = null;
  
    // Comprobar si la cadena coincide con alguna expresión regular y realizar la operación correspondiente
    if (sumaRegex.test(cadena)) {
      const matches = cadena.match(sumaRegex);
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      resultado = num1 + num2;
    } else if (restaRegex.test(cadena)) {
      const matches = cadena.match(restaRegex);
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      resultado = num1 - num2;
    } else if (multiplicacionRegex.test(cadena)) {
      const matches = cadena.match(multiplicacionRegex);
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      resultado = num1 * num2;
    } else if (divisionRegex.test(cadena)) {
      const matches = cadena.match(divisionRegex);
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      resultado = num1 / num2;
    } else {
      return "Operación no reconocida.";
    }
  
    return resultado;
  }
  
  // Ejemplo de uso
  const cadena1 = "Hacer la suma de 5 y 6";
  const resultado1 = calcularOperacion(cadena1);
  console.log(resultado1); // Resultado: 11
  
  const cadena2 = "Hacer la resta de 10 y 3";
  const resultado2 = calcularOperacion(cadena2);
  console.log(resultado2); // Resultado: 7
  
  const cadena3 = "Hacer la multiplicacion de 4 y 5";
  const resultado3 = calcularOperacion(cadena3);
  console.log(resultado3); // Resultado: 20
  
  const cadena4 = "Hacer la division de 15 y 3";
  const resultado4 = calcularOperacion(cadena4);
  console.log(resultado4); // Resultado: 5
  


/* switch (operador) {
      case 'suma':
        return num1 + num2;
      case 'resta':
        return num1 - num2;
      case 'multiplicación':
        return num1 * num2;
      case 'multiplicacion': // Permitir una variante sin acento
        return num1 * num2;
      case 'división':
        return num1 / num2;
      case 'division': // Permitir una variante sin acento
        return num1 / num2;
      default:
        return 'Operación no válida.';
    } */