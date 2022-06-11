
/**
 * Ejercicio 1
 * Funcion que reciba una palabra
 * Retorne la palabra invertida
 *
 * reverseStr('hola mundo')
 * -> 'odnum aloh'
 * 
 * Usar solo metodos de str y array
 */


/**
 * Ejercicio 2
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 * 
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */


/**
 * Ejercicio 3
 * Funcion que reciba un array de strings
 * y devuelva un array indicando si son palindromos o no
 * 
 * arePalindrome( ['oso','juan', 'seres'] )
 * -> [true, false, true]
 */


/**
 * Estudiar los métodos de array
 * .filter()
 * .reduce()
 */




/*
* Ejercicio 1
* Funcion que reciba una palabra
* Retorne la palabra invertida
*
* reverseStr('hola mundo')
* -> 'odnum aloh'
* 
* Usar solo metodos de str y array
*/


const strReversed = () => {
   let str = prompt('Dame una palabra', 'Hola').toLowerCase()
    let strReverse = ''
    for ( i = str.length -1 ; i >= 0 ; i--) {
        strReverse += str[i]
    }
    return strReverse
}

console.log(strReversed());



/**
 * Ejercicio 2
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 * 
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

// Ejercicio 2


// const strAverage = (x, y, z) => {
//     return parseInt (prompt('Indique tres números', '0, 0, 0') )
// }

// const numbers = () => {
//     let x = strAverage(x)
//     let y = strAverage(y)
//     let z = strAverage(z)
    
//     numbers = (x + y + z) / 3
    
// }


// console.log(strAverage() )

