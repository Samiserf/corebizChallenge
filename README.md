# ------- Project development by Lucio Filetto. ----------

## UTOPIA DOC

Correr server

```bash
npm start
```

## Estructura sitio

Dentro de `components` encontraremos todos los componentes necesarios, como por ejemplo:
`nav`, `footer`, `formContact`, `productsBestSold`, etc.
En el archivo `App.js` vamos a encontrar la home de la web:

## React, Sass, font-awesome, react-multi-carousel, react-responsive-carousel, react-stars, react-query

Estas son algunas de las librerias utilizadas en el proyecto. Se iba a utilizar axios, mutation and useQuery pero por una cuestion de tiempo se utilizo fetch.

## Styles

Cada componente tiene sus styles, podemos ver la implementacion de sass y responsive de la web.

## Context API, LocalStorage

Se utilizo context para lograr simular el aumento de productos en el carrito. Para mantener el valor por mas que se refresque la pagina se utilizo LocalStorage.
