/*
1.- Crear una función que me cuente la cantidad de palabras de cualquier string
2.- Crear una función que imprima la cantidad de letras de cada palabra en un string
3.- Crear una función que me entregue una lista de cada una de las palabras con la cantidad de letras que tiene
    "hola mundo"
        "hola - 4"
        "mundo - 5"
    "Corazón coraza"
        "Corazón - 7"
        "coraza - 6"
4.- Crear una función que me entregue una lista con aquellas palabras que tengan menos de 5 letras
    "hola mundo"
        "hola"
    "Corazón coraza"
5.- Crear una función que me entregue un string con las palabras que tengan una cantidad de letras par
    "La mejor forma de predecir el futuro es creándolo"
        "La de predecir el futuro es"
    "uno dos tres cuatro cinco seis"
        "tres cuatro seis"
*/
//Ejercicio1
// let str = 'Hola como estan'
// const countWords = (str) => {
//     let cantidadPalabras = str.split(' ').length
//     return cantidadPalabras
// }
// console.log(countWords(str))



//Ejercicio2
// let str = 'Hola como estan'
// const countWords = (str) => {
//     let strArray = str.split(' ')
//     strArray.forEach((palabra) =>{
//         console.log (palabra.length)
//     }    
//     )
// }
// console.log(countWords(str))


//Ejercicio3
// let str = 'Hola como estan'
// const countWords = (str) => {
//     let strArray = str.split(' ').map((cv) => {
//          return `${cv} - ${cv.length}`
//     }    
//     )
//     return strArray
// }
// console.log(countWords(str))


// 4.- Crear una función que me entregue una lista con aquellas palabras que tengan menos de 5 letras
//     "hola mundo"
//         "hola"
//     "Corazón coraza"
let str = 'Hola como estan'
const countWords = (str) => {
    let strArray = str.split(' ').filter(cv => {
        return cv.length >5
    }    
    )
   
}
console.log(countWords(str))
