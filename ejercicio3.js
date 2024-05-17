/**
 * 1. Dar funcionalidad de sumar y restar a la calculadora.
 *
 * 2. Mostrar resultado en elemento .resultado
 * 3. Si resultado < 0, mostrar 0.
 */

/**
 * NECESITO: 
 * 1. Metodo del DOM para seleccionar elementos. document.querySelector()
 * 2. Event Listeners para escuchar el click de los botoners e invocar funciones
 */


/**
 * Ejemplo de document.querySelector();
 * document.querySelector('#miId'); -->  <elemento id="miId"
 * document.querySelector('button'); --> <button></button>
 * document.querySelector('.resultado'); --> <elemento class="resultado"
 */


const num1 = document.querySelector("#valor1");
const num2 = document.querySelector("#valor2");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const resultado = document.querySelector(".resultado");



/**
 * PARTE II eventListeners
 * 
 * Son métodos de JS para "escuchar" todo lo que sucede entre el usuario y la
 * página web, entre otras: los clics, los ajustes de tamaño de ventana, los 
 * movimientos del mouse, los envíos de formularios, etc, etc...#btn
 * 
 * 
 * Su sintaxis es la siguiente: 
 * 
 * elementoCapturado.addEventListener('tipoEvento', funcionNombre);
 * 
 * function funcionNombre(e) {
 *  // acá pongo todo lo que voy a escuchar.   
 * }
*/

btnSumar.addEventListener("click" , sumar);
function sumar (e)  {
    let suma = parseInt(num1.value) + parseInt(num2.value);
    resultado.innerHTML = suma 
}

btnRestar.addEventListener("click" , restar);
function restar (e)  {
    let resta = parseInt(num1.value) - parseInt(num2.value);
    if (resta <0) {
        resta = 0
    }
    resultado.innerHTML = resta 
}
