# Buscador de películas

Este proyecto contiene una aplicación que permite buscar películas textualmente
utilizando [The Movie DB API](https://developer.themoviedb.org/docs).

## Ejecución de la aplicación

Podemos ejecutar y probar la aplicación ejecutando estos pasos:

1. Descargar o clonar este repositorio.
2. Instalar las dependencias de Javascript necesarias, ejecutando
   ```shell
   npm install
   ```
3. Lanzar el servidor web de desarrollo, ejecutando
   ```shell
   npm run dev
   ```
4. Esto generará un servidor web en http://127.0.0.1:3000/ en el que podremos utilizar la aplicación.

### Requisitos previos

El proyecto se ha creado y probado utilizando las versiones de las siguientes herramientas:

* [Node](https://nodejs.org/es): `v16.14.0`
* [NPM](https://www.npmjs.com/): `9.8.1`

Es posible que en versiones inferiores no funcione correctamente.

## Descripción de la implementación

La aplicación se ha creado utilizando [Vue 3](https://vuejs.org/) como framework de Javascript, junto
con [Vuetify](https://vuetifyjs.com/en/) como sistema de componentes para diseñar la interfaz. También se ha
utilizado [Vue Router](https://router.vuejs.org/) para gestionar el enrutado de las diferentes páginas de la aplicación,
y [Pinia](https://pinia.vuejs.org/) para manejar el estado de la misma. Todo esto está orquestado
por [Vite](https://vitejs.dev/).

Para utilizar el API de TMDB se ha usado la librería [tmdb-ts](https://github.com/blakejoy/tmdb-ts), que provee wrapper
sobre el API, e incluye tipado de Typescript para los diferentes servicios y respuestas.

### Estructura de código

El código de repositorio está organizado de la siguiente forma:

* `src/main.ts`: punto de entrada de nuestra aplicación Vue, donde se inicializan los diferentes plugins utilizados.
* `src/App.vue`: componente principal la aplicación. Contiene la vista principal del enrutador.
* `src/views/`: directorio en el que se pueden encontrar las diferentes vistas de la aplicación, es decir, los
  componentes que son cargados por el enrutador.
* `src/components/`: componentes de Vue necesarios utilizados a lo largo de la aplicación.
* `src/lib/`: inicialización de librerías externas.
* `src/plugins/`: inicialización de plugins de Vue.
* `src/router/`: definición del enrutador.  
* `src/store/`: definición de las diferentes stores de Pinia.

