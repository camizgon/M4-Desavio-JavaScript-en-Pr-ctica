/**
 * Investigar:
 * 
 * 1. Ejemplo de eventListener con evento 'submit' para controlar formulario.
 * 2. Controlar el preventDefault del formulario. (vas a necesitar la variable e)
 * 
 * e.preventDefault();
 * 
 * Prompt:
 * Quiero controlar en el handler de un eventListener con submit asociado a un 
 * formulario, el ingreso de los datos, por lo que no quiero que se produzca la 
 * acción por default de recargar la página. Me das un ejemplo en Javascript? 
 */


/* Input Formulario */
const formulario = document.querySelector("#formulario");
const inputName = document.querySelector("#nombre");
const inputSubject = document.querySelector("#asunto");
const inputMessage = document.querySelector("#mensaje");
const inputBtn = document.querySelector("#botton");
/* Errores para mensaje en input */
const errorName = document.querySelector(".errorNombre");
const errorSubject = document.querySelector(".errorAsunto");
const errorMessage = document.querySelector(".errorMensaje");
/* Mensaje de éxito */
const successMessage = document.querySelector(".resultado");
/* Regex */
const regexName = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;
const regexSubject = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;
const regexMessage = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;


formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    /* Capturar el valor de los Input */
    let name = inputName.value;
    let subject = inputSubject.value;
    let message = inputMessage.value;

    inputValidador(name, subject, message);
});
/*Validación  */
function inputValidador(name, subject, message) {
    const validName = regexName.test(name);
    const validSubject = regexSubject.test(subject);
    const validMessage = regexMessage.test(message);

    deleteError();

    if (!validName) {
        errorName.innerHTML = "El Nombre es requerido";
    }

    if (!validSubject) {
        errorSubject.innerHTML = "El asunto es requerido";
    }

    if (!validMessage) {
        errorMessage.innerHTML = "El mensaje es requerido";
    }

    if (validName && validSubject && validMessage) {
        deleteError();
        deleteInputs();

         //Mensaje de éxito
         successMessage.innerHTML = "¡Mensaje enviado con éxito!";
         
    }
}

function deleteError() {
    errorName.innerHTML = "";
    errorSubject.innerHTML = "";
    errorMessage.innerHTML = "";
}

function deleteInputs() {
    inputName.value = "";
    inputSubject.value = "";
    inputMessage.value = "";
}