<h1>Codificador de texto</h1>

![Badge en Desarollo](https://img.shields.io/badge/status-terminado-green)
![Badge forks](https://img.shields.io/badge/forks-1-blue)

Aplicación para codificar o descodificar texto ingresado por el usuario y, posteriormente, devolver el texto a la versión original. La aplicación acepta como entrada solamente texto en letras minúsculas sin acentos ni carácteres especiales.

![Screen Shot 2024-07-23](https://raw.githubusercontent.com/edwartlc/codificador-texto/main/assets/images/2024-07-23.png)

> [!NOTE]
> Visite mi [Sitio GitHub](https://edwartlc.github.io/codificador-texto/)

## Utilizando el codificador de texto
Para utilizar el codificador de texto clone el código fuente:
```
git clone https://github.com/edwartlc/codificador-texto.git
```
## Funcionalidades
- `Funcionalidad 1:` codificar el texto ingresado por el usuario.
- `Funcionalidad 2:` descodificar el texto ingresado por el usuario.
- `Funcionalidad 3:` copiar en el portapapeles el texto del panel de resultado.

> [!IMPORTANT]
> Para utilizar la funcionalidad 3 debe verificar si la API navigator.clipboard es compatible con su navegador:
> ```
> if ('clipboard' in navigator) {
>     console.log('¡La API es compatible!');
> } else {
>     console.log('¡La API no es compatible!');
> }
> ```
> También puede verificar la [tabla de compatibilidad](https://caniuse.com/mdn-api_navigator_clipboard).
