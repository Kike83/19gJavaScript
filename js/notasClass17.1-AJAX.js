
// Crear Rama-17

// 7.27 pm
// Tarea 2 de ayer:

// AJAX

// del doc de Jorge
/**
 * Tarea 2.
 * Estudiar 
 * ¿Que es AJAX?
 * Diferentes formas de implementarlo
 * XmlHttpRequest
 * fetch
 */



// AJAX

// Asyncronic JavaScript And XML

// XMLHttpRequest

html
Chrome

Ajax

mozilla



// 7:48 pm
// los 5 tiempos, que estaremos viendo:
// formar request
// enviar request
// esperar respuesta
// recibir request
// procesar el response


// 1.-
// Create an XMLHttpRequest Object
const primerPeticion = new XMLHttpRequest()
console.log(primerPeticion)



//2.-
// Define a callback function
primerPeticion.onload = (data) => {
  // Here you can use the data
  console.log(data)
}
// Es como el Listener




// 3.- 
// Send a request
// GET, POST, DELETE, PATCH, PUT
primerPeticion.open("GET", "/js/example.json")
// console.log(primerPeticion)
primerPeticion.send()
// console.log(primerPeticion)



// 8.02pm, volvió a compartir
// pero regreso con información andentro, de secciones en medio, como after: "Es como el Listener"

// 8:08 pm
// brincó a example.json
// aun archivo de .json ya hecho, no hubo intro,

// API JSON
// con un 3



// subío -push a Rama-17
// hizo ho
// URL en slack, de todo lo que hizo hoy, osea, Rama-17


// Breakouts ya no,
// a Break -- de 8.55pm a 9.10pm


// Breakouts
// 9.15 pm 
// con el ejercicio - lista usuarios, incorporar AJAX,




