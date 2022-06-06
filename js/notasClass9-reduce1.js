





// 7:30pm
// Ejercicio 1 de tarea
// Duda de Francisco

'string'.toLowerCase().slice(2)

let nombres = [ 'jorge', 'ana', 'ivan', 'sergio', 'oscar' ]
//
//

let filtrados = nombres
    .filter((nombre, index, array) => {
        if (
            nombre.charAt(9) === 'a' ||
            nombre.charAt(9) === 'a' ||
            nombre.charAt(9) === 'a' ||
            nombre.charAt(9) === 'a' ||
            nombre.charAt(9) === 'a' ||
        ) {
            return nombre
        }

    }).map( (nameFiltered) => {
        let firstLetter = nameFiltered.charAt(0).toUpperCase()
        let restName = nameFiltered.substring(1).toLowerCase()

        return firstLetter + restName

    })

console.log(filtrados)




// 7:48 pm
// Ejercicio 3 de tarea
// Instrucciones

const additionMultiArr = (arregloArreglos) => {

    let counter = 0
    arregloDeArreglos.forEach( (arreglo) => {
        arreglo.forEach( (numero) => {
            counter = counter + numero
        })
    })

    return counter
}

additionMultiArray( [
    [1,2,3]
    [1,3,2]
    [3,2,1]
])


// let arr = [1,2,3], [1,3,2], [3,2,1]
//     arr.forEach( (numero) => {
//         console.log(message)
    
//     })



// 8:00 pm
// de Bere
// en Cheet-Sheet

// .filer()

// Chrome, consola --> frutas



// 8:08 pm
// .map()

// ingredientes --> se parece al de tarea (extra)


// 8:15 postMessage
// Bere pantalla


// VS Code -- push (homework-class8)
// VS Code -- nueva rama class9
// VS Code -- nueva carpeta reduce.js


Excel



