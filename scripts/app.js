const clavesCodificacion = {'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};
const caracteresValidos = ' !abcdefghijklmnopqrstuvwxyz';

function validarTexto(texto) {
    let esValido = [];
    for (let caracter of texto) {
        for (let letra of caracteresValidos) {
            if (caracter == letra) {
                esValido.push(1);
            }    
        }
    }
    if (esValido.length == texto.length) {
        return true;
    } else {
        return false;
    }
}

function convertirTexto(tipoConversion) {
    let entrada = String(document.getElementById('textoUsuario').value.replaceAll('  ', ' '));
    let salida = '';
    if (validarTexto(entrada) == false) {
        alert('Debe ingresar solo letras minúsculas sin acentos y sin caracteres especiales.');
    } else if (entrada == '') {
        alert('Debe ingresar el texto que quiere codificar o descodificar.');
    } else {    
        cambiarDisplay();
        for (let [clave, valor] of Object.entries(clavesCodificacion)) {
            if (tipoConversion === 'codificar') {
                entrada = entrada.replaceAll(clave, valor);
            } else {
                entrada = entrada.replaceAll(valor, clave);
            }
        }
        document.getElementById('textoModificado').innerHTML = entrada;
        document.getElementById('textoUsuario').value = '';
    }
}

function copiarTexto() {
    let texto = document.querySelector('#textoModificado');
    navigator.clipboard.writeText(texto.textContent);
    document.getElementById('textoModificado').style.color = '#FAFAFA'
    document.getElementById('textoModificado').style.backgroundColor = '#1940C7'
    

}

function cambiarDisplay() {
    document.getElementById('salidaTexto').style.display = 'block';
    document.getElementById('botonCopiar').style.display = 'block';
    document.getElementById('imagenBusqueda').style.display = 'none';
    document.getElementById('salidaSubtitulo').style.display = 'none';
    document.getElementById('salidaMensaje').style.display = 'none';
}

function habilitarBotones() {
    document.getElementById('botonCodificar').removeAttribute('disabled');
    document.getElementById('botonDescodificar').removeAttribute('disabled');
    document.getElementById('textoModificado').removeAttribute('style');
}