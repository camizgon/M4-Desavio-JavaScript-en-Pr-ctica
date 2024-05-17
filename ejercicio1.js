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
const inputSubjet = document.querySelector("#asunto");
const inputMessage = document.querySelector("#mensaje");
const inputBtn = document.querySelector("#botton");
/*Errores para mensaje en input */
const errorName = document.querySelector("#nombre");
const errorSubjet = document.querySelector("#asunto");
const errorMessage = document.querySelector("#mensaje"); 
/*Regex */
const regexName = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;
const regexSubjet = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;
const regexMessage = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;

// formulario.addEventListener("submit" , validarCampo);
formulario.addEventListener("submit" , function(){
    /*captar el valor de los Input */
    let name = inputName.value
    let subject = inputSubjet.value
    let message = inputMessage.value

    /*Validar cada Input y arrojar un error en el que no pase el text */
    inputValidador(name, subject, message);
    /*Si el test pasa, error se va */
    /*Si hay al menos un text incorrecto, mo puedo enviar el formulario */

});

function inputValidador(name, subject, messege){
    const validName = regexName.test(name);
    const validSubject = regexSubjet.test(subject);
    const validMessage = regexMessage.test(test);

    deleteError();

    if(!validName){
        errorName.innerHTML = "El Nombre es requerido";
    }

    if(!validSubject){
        error.innerHTML = "El asunto es requerido";
    }
    
    if(!validMessage){
        error.innerHTML = "El asunto es requerido";
    }

    if(validName &&validSubject && validMessage){
        deleteError();
        deleteInputs();
    }

}

function deleteError(){
    errorName.innerHTML = "";
    errorSubjet.innerHTML = "";
    errorMessage.innerHTML = "";
}

function deleteInputs(){
    inputName.value = "";
    inputSubjet.value = "";
    inputMessage.value = "";

}
function validarCampo (e){
    e.preventDefault();
    console.log("Hola!");
}

