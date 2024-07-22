const clavesCodificacion = {'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};
const caracteresValidos = ' abcdefghijklmnopqrstuvwxyz';

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
    if (validarTexto(entrada) == false) {
        alert('Debe ingresar solo letras minúsculas sin acentos y sin caracteres especiales.');
    } else if (entrada == '') {
        alert('Debe ingresar solo letras minúsculas sin acentos y sin caracteres especiales.');
    } else {    
        cambiarDisplay();
        for (let [clave, valor] of Object.entries(clavesCodificacion)) {
            if (tipoConversion === 'codificar') {
                entrada = entrada.replaceAll(clave, valor);
            } else {
                entrada = entrada.replaceAll(valor, clave);
            }
        }
        document.getElementById('salidaTexto').value = entrada;
        document.getElementById('textoUsuario').value = '';
    }
}

function copiarTexto() {
    let texto = document.getElementById('salidaTexto');
    navigator.clipboard.writeText(texto.value);
    document.getElementById('botonDescodificar').removeAttribute('disabled');

}

function cambiarDisplay() {
    document.getElementById('salidaTexto').style.display = 'block';
    document.getElementById('botonCopiar').style.display = 'block';
    document.getElementById('imagenBusqueda').style.display = 'none';
    document.getElementById('salidaSubtitulo').style.display = 'none';
    document.getElementById('salidaMensaje').style.display = 'none';
}