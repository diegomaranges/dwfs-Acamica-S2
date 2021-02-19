# DWFS 68 JS.

## Condicionales:

Cuando tengamos que decidir entre si usar (if, else if y else) o (switch case) hay que tener en cuenta varios aspectos en cuenta pero sobre todo que queremos comprar o evaluar.

Si por el enunciado o bien al decir el comportamiento esperado necesitamos comprar valores específicos utilizamos switch case como por ejemplo:

- Necesito saber si el usuario elige la opción 1, 2 o 3, o bien elige una opción no valida.
- Si la variable x tiene el valor "string1" hacer esto, si tiene el valor "string2" hacer esto otro y en cualquier otro caso devolver un error.

Como podrán ver los casos en donde podemos utilizar switch son realmente reducidos por lo cual no esta mal si los remplazamos por (if, else if y else).

Y hablando de estos últimos tienen la particularidad que pueden resolver operaciones mas complicadas y con mas de una variable al mismo tiempo, siempre y cuando el resultado a evaluar sea de tipo boolean, es decir true o false. Tener en cuenta que también se utilizan cuando necesito uno o dos condicionales. Por ejemplo:

- El usuario ingreso un valor numérico donde pide su edad? (if)
- Necesito saber si el usuario y la contraseña del usuario son correctas, si son correctas continuar con la ejecución, sino terminal el programa (if y else).
- Necesito saber si el usuario y la contraseña del usuario son correctas, sino necesito saber si el usuario existe para decir que la contraseña es incorrecta, y por ultimo si ninguna de las dos es decir que el usuario no existe (if, else if, else).

Un dato muy importante a tener en cuenta es que no necesariamente este condicional debe terminar con un else. puede terminar en el if o en un else if. Lo importante es escribir que quiero hacer / comparar para saber cual de ellos me conviene utilizar en mi programa.

PDT: una buena practica es intentar tener todo el código en una sola linea y solamente utilizar if, sin else if o else, para los casos erróneos, para que el flujo correcto de ejecución sea la linea simple del código. Por ejemplo: pedir al usuario su clave, si no es correcta (if) devolver un error y terminar la ejecución de la función, sino continuo con la ejecución de la función.

## Bucles:

En esta parte contamos con tres variantes; while, do while y for.

Vamos a comenzar con el for que es el que mas se diferencia de los 3. Este se utiliza generalmente en dos situaciones muy particulares, en cualquier manera de sus variantes [(for, foreach, forin y forof)](https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript).

- El primero y mas común es recorrer todos los elementos de un arreglo.
- Y el segundo es cuando necesitamos ejecutar una cierta cantidad finita y conocida de veces cierta cantidad de comandos para llegar a una finalidad. Por ejemplo: cargar 10 imágenes de forma random desde la base de datos.

## Array y objetos:

La diferencia entre ellos es bastante marcada, pero es mas simple entenderlo si lo pasamos a lenguaje humano.

Los array son propiamente dicho un objeto para javascript, ya que muchos [tipos primitivos de este lenguaje se consideran de esta manera](https://www.w3schools.com/js/js_object_definition.asp), por lo cual esta bueno que se abstraigan de eso cuando piensen en este tipo de datos. Pero para que sea mas fácil de entender hay que pensarlo como un tipo de variable, en el cual ustedes pueden muchos elementos dentro, es decir los arrays cumplen la función de almacenar muchos elementos dentro, ya sea:

- Un conjunto de objetos.
- Un conjunto de enteros.
- Un conjunto de palabras.
- Un conjunto de elementos ingresados.
- etc.

Y por otro lado los objetos son en síntesis parten de una clase que define las generalidades. Por ejemplo:

- Las propiedades (nombre, edad, etc) y movimientos (caminar, correr, saltar, etc) que puede realizar una persona.
- Las propiedades  (nombre, edad, raza, etc) y movimientos (caminar, correr, saltar, etc) que puede realizar un animal.
- etc.

Mientras que el objeto en si es definido por medio la keyword [new](https://www.w3schools.com/js/js_object_definition.asp) y crean una instancia o utilizando la misma palabra crean un objeto de una clase.

- Creo a Juancito que es un objeto de tipo persona
- Creo a Diegote que es un objeto de tipo animal.
- etc.

## Funciones:

Para el tema particular de las funciones vamos a hacer una gran distinción. Cual es la diferencia entre una función y un método?
para responder esto necesitamos entender que un objeto posee [propiedades](https://www.w3schools.com/js/js_object_properties.asp) y [metodos](https://www.w3schools.com/js/js_object_methods.asp), es decir que estos últimos son funciones pero que solo puedo ejecutar desde un objeto ya creado. Utilizando los ejemplos de arriba, un buen ejemplo de estos seria -> *Juancito.caminar()*

Mientras que una función es algo que no depende de un objeto, sino que nosotros la definimos para utilizar en alguna sección de código, [utilizando cualquiera de sus variantes](https://lenguajejs.com/javascript/fundamentos/funciones/). Ahora la pregunta seria: como se cuando y porque crear una función?

La respuesta a esta acción puede ser bastante simple como compleja por lo que pueden usar este [link](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones) para profundizar luego, pero en si son un conjunto de comandos que tienen que cumplir una finalidad y repito **UNA** funcionalidad. Es decir:

> Necesito ordenar todos los elementos de cualquier tipo de arreglo que reciba -> *una función*

Ahora si en esta función que esta arriba yo necesito intercambiar dos elementos porque queremos ordenar un array de números enteros utilizando un algoritmo determinado (como por ejemplo el [quicksort](https://latteandcode.medium.com/algoritmos-de-ordenaci%C3%B3n-quicksort-en-javascript-f064db39e6ad) - esta bueno saber que existe pero no es necesario para el curso por lo cual no se rompan la cabeza intentando entenderlo a fondo), es muy recomendado crear una función nueva para esto, ya que nuestra función base tendría dos funciones, ordenar el arreglo e intercambiar sus elementos y además pensar que, si eventualmente yo necesito eventualmente cambiar dos elementos de lugar en un arreglo tengo una función separada para usar y no repetir código:

> Necesito ordenar todos los elementos de cualquier tipo de arreglo que reciba -> *una función*
>
> Intercambiar dos elementos de posición dentro del arreglo -> una función

## links recomendados:

- [10 buenos plugins para VS Code](https://programacion.net/articulo/10_plugins_imprescindibles_para_visual_studio_code_1848)
- [Documentacion oficial de js (ingles)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Scope en js (ingles)](https://www.w3schools.com/js/js_scope.asp)
- [Glosario con la informacion principal de js (ingles)](https://www.codecademy.com/articles/glossary-javascript)
- [Uso de memoria en js (ingles)](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)
- [Hoisting explicado en la documentacion (ingles)](https://developer.mozilla.org/es/docs/Glossary/Hoisting)
- [Todo sobre arrays, propiedades y metodos. Documentacion oficial de js (ingles)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
- [Libro - Eloquent JavaScript (ingles)](https://eloquentjavascript.net/)
- [Libro - Eloquent JavaScript Español Version](https://hectorip.github.io/Eloquent-JavaScript-ES-online/)
- [JavaScript: The Good Parts (ingles)](https://github.com/dwyl/Javascript-the-Good-Parts-notes)
- [Fundamento de Funciones, muy buen articulo](https://lenguajejs.com/javascript/fundamentos/funciones/)
- [5 diferencias entre arrow y regular function en js (ingles)](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
- [Articulo completo sobre como renderiza una pagina el navegador (ingles)](https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969#:~:text=A%20DOM%20tree%20starts%20from,respective%20class%20(constructor%20function).)
- [Muchos ejemplos de manejo de DOM con w3school (ingles)](https://www.w3schools.com/jsref/dom_obj_all.asp)
- [Storage breve descripcion entre la local y el de la sesion (ingles)](https://www.digitalocean.com/community/tutorials/js-introduction-localstorage-sessionstorage#:~:text=localStorage%20and%20sessionStorage%20are%20almost,web%20app%20clears%20the%20data.)
