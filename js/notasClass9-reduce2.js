
// 8:15 postMessage
// Bere pantalla


// VS Code -- push (homework-class8)
// VS Code -- nueva rama class9
// VS Code -- nueva carpeta reduce.js


// Excel



// let numeros = [1,2,3,4,5,6,7,8,9]

// let acumulador = 0

// numeros.forEach( 
//     (numero) => {
//         acumulador = acumulador + numero
// })

// console.log(acumulador)




// // si kike?


// let cajaNaranjas = ['naranja', 'naranja', 'naranja']



// reduce
// .map(callback)
// .forEach(callback)
// .filter(callback)

// .reduce(callback, initialValue)



/*

let frutas = = ['naranja', 'naranja', 'naranja']

frutas.forEach( (fruta, index, arr) => {

}, '')

frutas.reduce( (recipiente, fruta, index, arr) => {

}, '')

*/


// reduce --> Sintaxys
// arr.reduce( () => {} )
// acc = accumulador

// let numeros = [1,2,3]
// let total = arr.reduce ( (acc, cv, index, arr) => {
//     console.log(index, acc, cv)
//     return acc + cv
// }, 10)

// console.log(total)




// let frutas = = ['naranja', 'naranja', 'naranja', 'zanahoria']
// let vaso = frutas.reduce ( (recipiente, fruta, index, arr ) => {
//     return recipiente + fruta

// }, '')

// console.log(vaso)



/*
Jorge por slack

let numeros = [1,2,3]
let totalSuma = numeros.reduce( (total, cv, index, arr) => {
    return total += cv
}, 100 )
console.log(totalSuma)



let frutas = ['naranja','naranja', 'zanahoria']
let vaso = frutas.reduce( (recipiente, fruta, index, arr ) => {
    return recipiente + fruta
}, '' ) 
console.log(vaso)

*/



// after Break

// Ejercicio .reduce()

// Instrucciones --> Bere por chat, de zoom

/**funcion con reduce()
 * getInitialLetters['jorge,'luis,'camarillo','cristobal']
 * 'jlcc'
*/

// let nombre = ['Francisco', 'Manuel', 'Martinez', 'Ibarra' ]

// const iniciales = nombre.reduce( (acc, cv) => {

//     acc += cv.charAt(0).toLowerCase()

//     return acc
// })

// console.log (iniciales)



// por el chat --> Francisco

// let nombre = ['Francisco', 'Manuel', 'Martinez','Ibarra']

// const iniciales = nombre.reduce ( (acc, cv) => {

//     acc += cv.charAt(3).toLowerCase()

//     return acc

// },'')

// console.log (iniciales)


// Annie explicó en pantalla de Francisco

// Lore --> Noemi



// agarró instrucciones que ya tenía

// const getDoubleNumbers = (arr) => {

//     let doubleNumbersArr = []

//     doubleNumbersArr = arr.reduce( (acc, elemento, index) => {
//         acc.push(elemento * 2)
//         return acc
//     }, [] )
//     return doubleNumbersArr
// }

// console.log(getDoubleNumbers ([4,7,9]))


// de Tarea
/** 
 * función
 * getAverage( [1,2,3,4])
 * --> 2.5
 * 
*/



// const getAverage = (arr) => {
//     let promedio = 0

//     promedio = arr.reduce( (acc, cv) => {
//         return acc + cv
//     }, 0)

//     return promedio / arr.lenght
// }



// Ejemplo reducido
// En consola escribir --> getAverage( [1,2,3,4] )

const getAverage = (arr) => {
    
    return arr.reduce( (acc, cv) => acc + cv , 0) / arr.length

}




// mañana Repaso con Isra
// 11:00 am


// Instrucciones de tarea


