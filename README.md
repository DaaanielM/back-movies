# Backend API Movies - MVM

El siguiente repositorio contiene:

-   Configuración con express.
-   Configuración a la base de datos de mssql (Cliente de Microsoft SQL Server)
-   Modelo, vista y controlador de los servicios

### Pre-requisitos 📋

-   Tener VSCode o parecidos
-   NodeJS instalado
-   Un gestor de base de datos SQL (SQLyog)
-   Git
-   Postman

### Instalación 🔧

Clonar el repositorio y instalar con:

```
npm i
```

Ejecutar con

```
nodemon index.js
```

Una vez instalado y ejecutado el proyecto. Podremos encontrar: la configuración a la base de datos, puerto, modelo, controlador y rutas.

Para obtener algún dato de la base de datos, ingresamos al POSTMAN y ponemos la ruta para listar solicitudes, por ejemplo:

```
https://apimvm.azurewebsites.net//solicitudes/listar
```

Este get, nos tendría que listar las solicitudes que tengamos en nuestra base de datos:
![Image text](https://github.com/DaaanielM/back-movies/blob/master/get.png)

Y así mismo con los demás servicios. Para encontrar las rutas, podemos ir a la carpeta de routes.

## Construido con 🛠️

-   [node-mysql](https://www.npmjs.com/package/mysql) - Controlador de Node.js para Mysql.
-   [node-cors](https://www.npmjs.com/package/cors) - Control de accesso HTTP
-   [express](https://www.npmjs.com/package/express) - Entorno de trabajo para aplicaciones web y APIS.
-   [morgan](https://www.npmjs.com/package/morgan) - Middleware de registro de solicitudes HTTP
-   [MVC](https://somospnt.com/blog/159-node-mvc) - Modelo, Vista, Controlador.

## Autores ✒️

-   **Daniel Brand & Felipe Carvajal** - _Backend_ - (https://github.com/DaaanielM) - (https://github.com/juanfelipecp)
-   **Daniel Brand** - _Base de datos_ - (https://github.com/DaaanielM)
-   **Daniel Brand** - _Documentación_ - (https://github.com/DaaanielM)

## Licencia 📄

Este proyecto está bajo la Licencia de (Daniel Brand y Felipe Carvajal)
