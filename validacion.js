//Haz tú validación en javascript acá
const nombreIngresado = document.querySelector(".formcontato__input--texto");
const asuntoIngresado = document.querySelector(".formcontato__input--asunto");
const correoIngresado = document.querySelector(".formcontato__input--correo");
//const nombreIngresado = document.querySelector('.input--texto'); 
let pruebasBtn = document.querySelector('.formcontato__botao');
let contador = 0;




function validarNombre() {
    if(!nombreIngresado.checkValidity()) {
        nombreIngresado.classList.add("Invalido");
        console.log("Formato de nombre no coincide");
    alert('SOLO LETRAS SIN NUMEROS NI CARACTERES ESPECIALES!!');
    // nombreIngresado.setCustomValidity("SOLO MINUSCULAS SIN NUMEROS NI CARACTERES!!");
    } else if(nombreIngresado.checkValidity()){
        nombreIngresado.classList.remove("Invalido");
        nombreIngresado.classList.add("Valido");
        contador++;
    }
    
}


function validarAsunto() {
    if(!asuntoIngresado.checkValidity()) {
        asuntoIngresado.classList.add("Invalido");
    alert('SOLO LETRAS SIN NUMEROS NI CARACTERES ESPECIALES!!');
    // nombreIngresado.setCustomValidity("SOLO MINUSCULAS SIN NUMEROS NI CARACTERES!!");
    } else if(nombreIngresado.checkValidity()){
        asuntoIngresado.classList.remove("Invalido");
        asuntoIngresado.classList.add("Valido");
        contador++;
    }  
}

function validarCorreo() {
    if(!correoIngresado.checkValidity()) {
        correoIngresado.classList.add("Invalido");
    alert('SOLO LETRAS SIN NUMEROS NI CARACTERES ESPECIALES!!');
    // nombreIngresado.setCustomValidity("SOLO MINUSCULAS SIN NUMEROS NI CARACTERES!!");
    } else if(nombreIngresado.checkValidity()){
        correoIngresado.classList.remove("Invalido");
        correoIngresado.classList.add("Valido");
        contador++;
    }  
}

// function bloquearBoton(){
//     if(contador == 3){
//         pruebasBtn.disabled = false;
//     } else if(contador !=3){
//         pruebasBtn.disabled = true;
//     }
// }

function funcionLlamadora(){
    validarNombre();
    validarAsunto();
    validarCorreo();
}



pruebasBtn.addEventListener('click',funcionLlamadora);