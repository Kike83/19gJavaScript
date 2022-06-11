
/**
 * Ejercicio 1
 * 
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 * 
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 * 
 */

let koders = [
    {
        name: 'kike',
        lastName: 'koala',
        age: 30,
        generation: 19,
        modulos: ['js', 'node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Marisol',
        lastName: 'Fuentes',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]

// Mi solución

console.log(koders[2])

console.log(`Hola, soy ${koders[0].name} ${koders[0].lastName} y tengo ${koders[0].age} años. Soy de la generación ${koders[0].generation}`)

console.log(`Hola, soy ${koders[1].name} ${koders[1].lastName} y tengo ${koders[1].age} años. Soy de la generación ${koders[1].generation}`)

console.log(`Hola, soy ${koders[2].name} ${koders[2].lastName} y tengo ${koders[2].age} años. Soy de la generación ${koders[2].generation}`)



// Solución de Jorge

// Solución 1:

const printName = (arrObj) => {
    arrObj.find(object => {
        console.log(` ${object.name} tiene ${object.age} y es de la generación ${object.generation}` )
    } )
}

console.log(printName(koders))

// OjO --> .find() = es --Método de Array--



// Solución 2:

koders.forEach((objCompleto) => {
    console.log(`
    ${objCompleto.name} ${objCompleto.lastName}
    tiene ${objCompleto.age} años de edad y es
    de la generacion ${objCompleto.generation}
`)
})


// OjO --> .foEach() = es --Método de Array--




/**
 * Ejercicio 2
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 * 
 */


// Mi - Intento 1
// let totalAge = 0
// for (key in koders) {
//     totalAge += parseInt(koders[1].age)
// }

// console.log(totalAge)


// Mi - Intento 2

// const totalAge = ( objeto ) => {
//     let auxTotal = 0;
//     for (key in objeto) {
//     auxTotal += parseInt(koders[key].age);
//     }
//     return auxTotal;        
// }
// console.log(totalAge())


// Solución de Jorge
let totalAge = 0
koders.forEach((objCompleto) => {
    totalAge = totalAge + objCompleto.age
})

console.log(totalAge)

// OjO --> .foEach() = es --Método de Array--







/**
 * Ejercicio 3
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 * 
 */
let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

console.log(library[1])


// Solución de Jorge

let totalReading = library.reduce( (total, libro) => {
    libro.readingStatus ? total += 1 : total
}, 0)

console.log(totalReading)


