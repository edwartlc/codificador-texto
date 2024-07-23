<h1>Codificador de texto</h1>

![Badge en Desarollo](https://img.shields.io/badge/status-terminado-green)
![Badge forks](https://img.shields.io/badge/forks-1-blue)

Aplicación para codificar o descodificar texto ingresado por el usuario y, posteriormente, volver a convertirlo a la versión original.

> [!NOTE]
> Visite mi [Sitio GitHub](https://edwartlc.github.io/codificador-texto/)

## Utilizando el codificador de texto

Para utilizar el codificador de texto por favor siga las siguientes instrucciones:

1. Clone el código fuente:
```
git clone https://github.com/edwartlc/codificador-texto.git
```
2. Verificar si navigator.clipboard API es compatible con su navegador:
```
if ('clipboard' in navigator) {
    console.log('¡Clipboard API es compatible!'); 
  } else {
    console.log('¡Clipboard API no es compatible!');
}
```
También puede verificar la [tabla de compatibilidad](https://caniuse.com/mdn-api_navigator_clipboard).
