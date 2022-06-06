




// DOM

// 1.- Encontrar por ID
document.getElementById('title')
 
// Encontrar por tagname
document.getElementsByTagName('h1')[0]

// Encontrar por clase
document.getElementsByClassName('item')


// seleccionar elementos por: clase, id, tagname
// OjO SOLO selecciona la primer coincidencia
document.querySelector('.item')   // clase
document.querySelector('#title')  // id
document.querySelector('h1')      // tagname


// seleccionar elementos por: clase, id, tagname
// OjO selecciona todas las coincidencias
document.querySelectorAll('.item')

let todosLosMenus = document.querySelectorAll('.item')
todosLosMenus.forEach(cv => {
   console.log(cv) 
})






// 2.- comprobar atributos

// Setear/agregar, obtener, comprobar -- atributos

// 2.1. Seleccionar elemento a cambiar
let titulo = document.querySelector('.title')
titulo.setAttribute('data-id', 1)

// 2.2. cómo obtenemos esos atributos
let atributoP = titulo.getAttribute('data-id')
console.log(atributoP)

// 2.3. comprobar si existe un atributo
titulo.hasAttribute('data-id')
// --> true / false






// Regresando de Break
// 9.15 pm

// algo que nos faltaba: (vid-1:55:21)
// 3. eliminar atributos

// element.removeAtrribute(attrName)
titulo.removeAttribute('id')


/**
 * Ejercicio
 * 
 * 
 */
// Ejercicio




// 10.01pm
// Crear elementos html

// CREAR

let listaDos = 

// AGREGAR

// AGREGAR



// 10.23 pm
// 
