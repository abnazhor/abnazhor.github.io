# Introducción

La verdad es que no sé cómo empezar esto sin que suene forzado. Quizás podría hacerlo con un "buenas tardes" o un "hola", pero la verdad es que he perdido un poco el tacto a esto de escribir publicaciones, de tanto tiempo que llevo sin escribir en el blog de anime... *guiño guiño*, y bueno, sin escribir en general. Creo que definitivamente empezaré con un "hola", para parecer lo más natural posible. Además, decir "hola" siempre es garantía de éxito: es claro, no tiene en cuenta la hora del día y además lo entiende cualquier persona.

Así que bueno, después de esta introducción, hola.

# El origen de todo esto

He empezado este blog porque tenía la espinita clavada de crear algo que fuese de este estilo sobre una plataforma así más independiente de lo que son los blogs habituales (**wordpress** y **blogger**, respectivamente). Llevaba un tiempo buscando la justificación para volverme un alternativo a las plataformas habituales y el otro día, leyendo publicaciones por Reddit me encontré con una que me dio los motivos suficientes. El artículo era [el siguiente](https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/) y total, que de entre todas esas costumbres que teóricamente los ingenieros informáticos tienen que tener, sobresalía una que me pareció realmente interesante: 

> Software engineers should regularly blog, journal, write documentation  and in general do anything that requires them to keep their written  communication skills sharp. Writing helps you think about your problems, and helps you communicate those more effectively with your team and  your future self. Good written communication is one of the most  important skills for any software engineer to master.

Y bueno, aunque yo no soy ingeniero informático y *no estoy seguro de si llegaré a serlo algún día*, sí que es verdad que me gusta mucho hablar de las cosas que voy diseñando y montando, así como de programación en general. La finalidad de este blog al fin y al cabo es hablar un poco de lo que se me vaya ocurriendo acerca del mundillo de la programación o de problemas que me vaya encontrando que quiera compartir. Digamos que esto será como el *rubber duck debugging*, —que para el que no lo conozca es una forma de intentar comprender los errores que tienes en tu código mediante conversaciones con un patito de goma en las que verbalizas todos esos problemas que tienes con tu código y más— pero en versión blog.

# El desarrollo

La plataforma en la que ves este blog está codificada en específico para esta finalidad, en un intento de aprender a hacer interfaces que no sean demasiado complicadas de usar ni demasiado simples a nivel visual. El *stack* que he utilizado para este caso concreto ha sido **Sveltekit** con un poco de **TailwindCSS** para darle algo de estilo visual coherente y luego las librerías correspondientes para toda la parte de validaciones de datos y tal. Entre ellas, una de las que se utiliza para poder mostrar y colorear los bloques de código es **highlight.js**, como podéis ver en este ejemplo:

```javascript
let x = 0;
let y = 2;

const sum = (num1, num2) => num1 + num2;

console.log(sum(x,y));
```

 

Debido a que nunca he hecho una plataforma al estilo de CMS, he acabado optando por desarrollar las publicaciones en un principio directamente sobre ficheros **markdown** y generar un índice de las publicaciones en json con todos los datos a utilizar. Digamos que al final lo que se realiza es una base de datos con todo guardado directamente sobre los ficheros estáticos que se sirven en el servidor. El puntazo de todo esto es que se puede alojar en GitHub y no da ruido de ningún tipo ni genera coste alguno, por lo que al final solo se asumen los costes del dominio a utilizar y eso es algo que está muy bien para un proyecto así.

![](https://i.imgur.com/QzPYSwO.png)

## Cambios a futuro

La verdad es que tengo varias ideas que pueden resultar muy interesantes a la hora de implementar cosas en el blog. Lo primero que me gustaría sería generar un sistema de categorías de la misma forma que se hace ahora con las carpetas de fechas para agrupar por categorías cada publicación del blog. Otra idea que tengo que podría estar bastante bien es la de generar un fichero con metadatos que permitan agrupar la información de la forma más sencilla posible, y lo que ya sería más que genial sería agregar un editor propio para no tener que estar escribiendo todo esto en Typora. Además de todo esto, algo que vendría bastante bien es aprender a implementar correctamente modo oscuro mediante **Tailwind**.

En general, este blog digamos que es una prueba de concepto de todo lo que se puede hacer sin llegar a utilizar una base de datos y manteniendo una coherencia visual —cosa que en mis anteriores proyectos brillaba por su ausencia...— que al usuario final le guste más de lo que le puede disgustar.

# Fin

Y bueno, creo que esto ha sido todo lo que tenía que hablar en una sola publicación. En otro artículo un poco más detallado ya hablaremos de cómo se ha creado el blog, y los cambios de diseño que he tenido que realizar para poder levantar esto sin que explote, que si no luego no tengo nada que contar y eso sería una pena. Y ahora sí, me despido hasta la próxima publicación. ¡Adiós!

PD: Os dejo un lindo sheltie otoñal ahora que estamos en fecha



![](https://thumbs.gfycat.com/PracticalEntireKangaroo-size_restricted.gif)

