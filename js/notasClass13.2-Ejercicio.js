

// Ejercicio
// 
// instrucciones por slack

/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */


// 1.-
 let lista = document.querySelector('ul')
 lista.setAttribute('class', 'lista7')
 lista.setAttribute('id', '01')
 
 
 // 2.-
let lista2 = document.querySelectorAll('.item')
lista2.removeAttribute('class')


// 3.-
lista2.setAttribute('class', 'list__item')

 

