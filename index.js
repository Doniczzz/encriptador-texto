const d = document;


function borrarTextarea() {
    // Obtener el textarea
    var textarea = document.getElementById("inputUser");
    // Borrar el texto del textarea asignando una cadena vacía al atributo value
    textarea.value = "";
  }

function comprobarTexto(){
    let textareaValue = document.getElementById('inputUser').value;
    let r = false;

    if (/[A-Z]/.test(textareaValue)) {
        alert("No deben haber mayúsculas en el texto");
        borrarTextarea();
        return r = true;
    }

    if (/[À-ÿ]/.test(textareaValue)) {
        // Hay acentos en el textarea
        alert("No deben haber acentos en el texto");
        borrarTextarea();
        return r = true;
    }
    return r;
}

function encriptar(str) {
    return str.replace(/e/g, 'enter')
              .replace(/i/g, 'imes')
              .replace(/a/g, 'ai')
              .replace(/o/g, 'ober')
              .replace(/u/g, 'ufat');
  }

function desencriptar(str) {
    return str.replace(/enter/g, 'e')
              .replace(/imes/g, 'i')
              .replace(/ai/g, 'a')
              .replace(/ober/g, 'o')
              .replace(/ufat/g, 'u');
  }

function encriptarTexto() {
    // Comprobar texto
    let comprobar = comprobarTexto();
    if (comprobar) {
        return false;
    }
    // Obtener el textArea
    let userInput = d.getElementById("inputUser").value
    // Chequear si el textArea esta vacío
    if (userInput === "") {
        alert("¡Debes ingresar un texto primero!");
        return false;
    }
    // Obtener el div 1
    var div1 = d.getElementById("sinTexto");

    // Cambiar la propiedad display del div 1 a "none"
    div1.style.display = "none";

    // Obtener el div 2
    var div2 = d.getElementById("conTexto");
    
    // Cambiar la propiedad display del div 2 a "block"
    div2.style.display = "flex";

    // Obtener el boton
    var botonCopiar = d.getElementById("copiar");

    // Cambiar la propiedad display del boton a "inline-block"
    botonCopiar.style.display = "inline-block";

    // Encriptar el texto
    let textoEncriptado = encriptar(userInput);

    //ejecutar otra funcion
    borrarTextarea();

    return d.getElementById("outputUser").innerHTML = textoEncriptado;
  }

function desencriptarTexto() {
    // Comprobar texto
    let comprobar = comprobarTexto();
    if (comprobar) {
        return false;
    }
    // Obtener el textArea
    let userInput = d.getElementById("inputUser").value
    // Chequear si el textArea esta vacío
    if (userInput === "") {
        alert("¡Debes ingresar un texto primero!");
        return false;
    }
    // Obtener el div 1
    var div1 = d.getElementById("sinTexto");

    // Cambiar la propiedad display del div 1 a "none"
    div1.style.display = "none";

    // Obtener el div 2
    var div2 = d.getElementById("conTexto");
    
    // Cambiar la propiedad display del div 2 a "block"
    div2.style.display = "flex";

    // Encriptar el texto
    let textoDesencriptado = desencriptar(userInput);
    // Borrar el textarea
    borrarTextarea();

    return d.getElementById("outputUser").innerHTML = textoDesencriptado;
  }

function copiarTexto(){
    let texto = document.getElementById('outputUser');
    navigator.clipboard.writeText(texto.textContent).then(function() {
        alert('Texto copiado al portapapeles');
        }, function(err) {
        alert('Error al copiar el texto al portapapeles: ');
        });
  }