/**
 * 1. Cambia el color de la caja principal al clickear en cada cajita de color. 
 */

/**
 * NECESITO:
 *  
 * 1. Metodo del DOM para seleccionar elementos. document.querySelector()
 * 2. Event Listeners para escuchar el click de los botones e invocar funciones
 */


/**
 * Captura elementos del html (DOM) y los asigno a variables para poder utilizarlos.
 * Utilizo const porque nunca cambiará el elemento asignado. 
 */
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const box = document.querySelector("#caja");

/**
 * Agrego eventListeners a los elementos capturados anteriormente para poder 
 * asociar ese elemento a un evento, en este caso, estamos agregando el evento 
 * click a cada botón para que cuando se clickee suceda "algo". Ese "algo" está
 * declarado y programado en cada función "handler" (manejador)
*/
btn1.addEventListener("click", cambiaArojo);
btn2.addEventListener("click", cambiaAnaranjo);
btn3.addEventListener("click", cambiaAcrema);
btn4.addEventListener("click", cambiaAverde);
btn5.addEventListener("click", cambiaAceleste);
btn6.addEventListener("click", cambiaArosado);

/**
 * Defino lo que va a pasar en cada handler declarado anteriormente. Acá pongo
 * todo el código. En este ejercicio, rescatamos el color de fondo de la cajita
 * clickeada para asignarlo a la caja grande. 
 */

function cambiaArojo(e) {
    caja.style.backgroundColor = btn1.style.backgroundColor
}
function cambiaAnaranjo(e) {
    caja.style.backgroundColor = btn2.style.backgroundColor
}
function cambiaAcrema(e) {
    caja.style.backgroundColor = btn3.style.backgroundColor
}
function cambiaAverde(e) {
    caja.style.backgroundColor = btn4.style.backgroundColor
}
function cambiaAceleste(e) {
    caja.style.backgroundColor = btn5.style.backgroundColor
}
function cambiaArosado(e) {
    caja.style.backgroundColor = btn6.style.backgroundColor
}


