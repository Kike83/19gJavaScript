




// Ejercicio 1
/**
 * Del siguiente objeto
 * Realizar una función que 
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */

 let salarios = {
    'juan': 30000,
    'Albert': 50000,
    'jorge': 50000
}

// Ejercicio 1.1.





// Ejercicio 1.2.

const employesAndTotal = ( objeto ) => {
    let tempTotal = 0;
    for (key in objeto) {
        tempTotal += parseInt(salarios[key]);
    }
    return tempTotal
    
}

console.log(employesAndTotal(salarios))





/**
 * Ejercicio 2.
 * Dado un objeto inicial, hacer los siguientes puntos 
 * 
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4
 * 3. Eliminar la propiedad avatar
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30
 * 5. Imprimir en consola todos los lenguajes dominados
 * 6. Clonar el objeto en uno nuevo
 * 7. Imprimir en consola el nuevo objeto
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */


let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}


console.log(koder)

console.log(koder.languages)
console.log(koder.level)


// 2.1.
koder.languages = ["JavaScript", "Python", "Ruby", "Go"],
console.log(koder.languages)


// 2.2.
koder.level = "4"
console.log(koder.level)

// 2.3.
delete koder.avatar
console.log(koder)

// 2.4.
koder.edad = "30"
console.log(koder.edad)

// 2.5.
console.log(koder.languages)

// 2.6.





/**
 * Estudiar los metodos de objetos
 * https://www.w3schools.com/js/js_object_methods.asp
 * https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
 * https://www.programiz.com/javascript/library/object/assign
 * 
 */