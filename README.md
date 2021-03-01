# Algoritmos

Una biblioteca que permite añadir a cualquier proyecto de Node algunos de los algoritmos más comunes de búsqueda y ordenamiento.

## Instalación

Vía NPM:

```sh
$ npm install git+https://github.com/andreandyp/documentacion.git
```

Vía YARN:

```sh
$ yarn add https://github.com/andreandyp/documentacion.git
```

## Uso

Importa los algoritmos donde sea necesario:

```javascript
const { binarySearch } = require("documentacion");
```

o para importar todos:

```javascript
const algoritmos = require("documentacion");
// Resto del código...
algoritmos.binarySearch()
```

## Pruebas

```sh
$ npm test
```

## Copyright
Creado por [AndreAndyP](https://github.com/andreandyp).