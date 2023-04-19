let numerosInput = document.getElementById('floatingInput');
let numerosResultado = document.getElementById('TextareaResult');
let validateEmogy = document.getElementById('emogy');

function fibonacci(numero) {
  // Inicializamos un array con los dos primeros números de la sucesión de Fibonacci.
  let fib = [0, 1];

  // Utilizamos un bucle for para generar los siguientes números de la sucesión.
  for (let i = 2; i < numero; i++) {
    // Para generar el siguiente número, sumamos los dos números anteriores de la sucesión.
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // Devolvemos el array con los números de la sucesión de Fibonacci.
  return fib;
}

function generarNumeros() {
  // Obtenemos el valor del input de números y lo convertimos a número.
  let numero = parseInt(numerosInput.value);
  
  // Validamos que el número sea válido.
  if (isNaN(numero) || numero < 1 || numero > 99) {
    //alert('Ingrese un número válido entre 1 y 99.');
    validateEmogy.classList.remove('.validate');
    return;
  }
  
  // Generamos la sucesión de Fibonacci.
  let cadena = fibonacci(numero);

  // Mostramos los resultados en el textarea.
  numerosResultado.value = cadena.join(' - ');
}


function limpiarImput() {

    // limpiamos variable de datos
    let cadena = [];
    numerosResultado.value = cadena;
    numerosInput.value = null;
}


// Asociamos la función generarNumeros al botón de generar.
let btnGenerar = document.querySelector('button');
btnGenerar.addEventListener('click', generarNumeros);

// Asociar la funcion limpiar input a boton icono
let btnLimpiar = document.querySelector('#limpiarImput');
btnLimpiar.addEventListener('click', limpiarImput);



