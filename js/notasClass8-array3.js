

// Soluciones de tarea

// Ejercicio 1

// const strReverse = (str) => {
//     let strReversed = str.split('').reverse().join('')
//     return strReversed
// }


// after Cheetshet x Slack

// .map()
// .filter()

// [1,2,3].filter(callback)
// let newArr = [1,2,3,4]

// let soloPares = newArr.filter( () => {})
//     // condición
//     if()

// 3 parámetros en el map
// .map(cv, index, array)









// Jorge x slack

// [1,2,3].filter(callback)
// let newArr = [10,20,30,41]

// // -> [10,20,30]

// let soloPares = newArr.filter( (currentValue, index, copiaArrOriginal) => {
//         // condicion
//         if(currentValue % 2 === 0){
//             // console.log(index, currentValue)
//             return currentValue
//         } 
//     }) 

// console.log(soloPares)


// let arrMultiple = [1,2,4, 'México', 'Perú', 'España', 3]

/**
 * Escribir una funcion que
 * Filtrar solo las ciudades
 * filterCities( [1,2,4, 'México', 'Perú', 'España', 3] )
 * -> ['México', 'Perú', 'España']
 *  .filter()
 *  .forEach()
 */

// igual al ejercicio anterior --> que resolvió con Lore
// igual al que se resolvió --> al inicio de la clase











// after Breakouts


/**
 * Escribir una funcion que
 * Filtrar solo las ciudades
 * filterCities( [1,2,4, 'México', 'Perú', 'España', 3] )
 * -> ['México', 'Perú', 'España']
 *  .filter()
 *  .forEach()
 */


let arrMultiple = [1,2,4, 'México', 'Perú', 'España', 3, 5, 'Argentina']

const strArr = arrMultiple.filter((element) => {
    console.log( typeof element )
    if ( typeof element === 'string' ) {
        return element
    }
}
)

console.log(strArr)


// let soloPares = newArr.filter( (currentValue, index, copiaArrOriginal) => {
//         // condicion
//         if(currentValue % 2 === 0){
//             // console.log(index, currentValue)
//             return currentValue
//         } 
//     }) 

// console.log(soloPares)









