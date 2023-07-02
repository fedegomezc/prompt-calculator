# prompt-calculator
## Curso Node JS de Daniel Segovia
CALCULADORA QUE FUNCIONA INGRESANDO UN TEXTO CON LAS OPERACIONES DESEADAS  
Se utilzan expresiones regulares (REGEX) para identificar y resolver las operaciones.  
Ej:  
input -> "Hacer la suma de 5 y 6"  
	output -> 11
### Características 
* Validación ingreso por consola. Se ingresa el mensaje por consola en el tercer argumento -> _node calculator.js 'Realizar la suma de 5 y 6'_
* Permite realizar operaciones de suma, resta, multiplicación y división.
* Permite realizar multiples operaciones. _'Sumar 3 y 7, luego dividir por 5 y sumar 2'_
* Admite valores negativos y flotantes. _'Multiplicar 3.5 y -2'_
* Admite cualquier variación de las palabras -> _suma, sumar, sumame, sumale, etc._
