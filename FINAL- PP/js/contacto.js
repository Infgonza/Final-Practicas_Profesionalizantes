const formulario = document.querySelector('#formulariojs');
const nombre = document.querySelector('#nombre').value;
const email = document.querySelector('#email').value;


function validarNombre(nombre) {

    nombre = nombre.replace(/[^A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]/g, "");
  
    if(nombre.length < 3) {
      return false;
    }
    return true;
}

function validarEmail(email) {
    // expresión regular para validar formato
    const valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return valEmail.test(email); 
}
formulario.addEventListener('submit', e => {

    const nombreValido = validarNombre(nombre);
    const emailValido = validarEmail(email);
  
    if(!nombreValido || !emailValido) {
      e.preventDefault();
      
      return; 
    }  

    enviar(e);
});