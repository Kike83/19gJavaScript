

// Metodos de array

// arr.push(item)
// .push() --> agregar nuevo item al final del array
// .pop() --> eliminar el último item al array

// miércoles 25 mayo 2022

// .push

// [1].push(5)
// [1,5].push(7)
// [1,5,7]

// .pop







// Tarea --> métodos de array

// Ejemplo 1
// .reverse()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     console.log( fruits );



// The .reverse() method reverses the order of the elements in an array.
// The .reverse() method overwrites the original array.






// Jorge --> Hoy vamos a ver las (x5) más comunes:

// 1.- .forEach()
// 2.- .map ()
// 3.- .filter()
// 4.- .reduce()
// 5.- .find()


// let arr = [1,2,3,4]

// // for(i = 0 ; i < arr.length; i++){
// //         console.log(arr[i])
// // }






// 1.- .forEach

// Sintaxys
//.forEach(valorDeCadaIteración, index, arrayOriginal) => {}


// let arr = [10,20,30,40]

// arr.forEach( (value, index, arr) => {
//     // console.log(cv, index, arr)
//     console.log(value)
// } )


// Ejercicio 

/**
 * Escribir una función
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitalizadas
 * capitalize(['méxicO', 'RIo', 'Los AngelEs'])
 * --> ['México', 'Rio', 'Los angeles']
 */


// let arrCities = ['méxicO', 'RIo', 'Los AngelEs', 'ROMA', 'chiLE']

// const capitalizadas = (arr) => {
//     let arrayCapitalizadas = []
//     arr.forEach((currentValue) => {
//         let firstLetter = currentValue.slice(0, 1).toUpperCase()
//         let secondLetter = currentValue.slice(1).toLowerCase()
//         let word = firstLetter + secondLetter
//         arrayCapitalizadas.push(word)
//     })
//     console.log(arrayCapitalizadas)
// }

// capitalizadas(arrCities)





// 2.- .map()

/**
 *  .map()
 * [1,2,3,4]
 * --> [2,4,6,8]
 */

let mapArr = [1,2,3,4]

// sintaxys

// let doubleArr = mapArr.map( (cv, index, arr) => {}

let doubleArr = mapArr.map( (cv) => {
    let transformado = cv * 2
    // console.log(cv, transformado)
    transformado += 5
    transformado += 10
    return transformado
})


// console.log(mapArr)

// console.log(doubleArr)

// Ejercicio
let arrStr = ['hola', 'mundo']

/**
 * Funciones
 * getFirstLast(['hola', 'mundo'])
 * --> ['ha', 'mo']
 * .map()
 */







