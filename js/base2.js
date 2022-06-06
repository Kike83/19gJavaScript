
// crear variables
// let, const, var
// Palabras reservadas
// BEM -- bloque__elemento--modificador



// constantes
const koder3 = 'Ernesto' // NO la puedo modificar

// variables
var koder = 'Jorge' // se pueden modificar
let koder2 = 'Noemi' // se pueden modificar



console.log(koder, koder2, koder3)
koder = 'Luis'
koder2 = 'Lorena'
console.log(koder, koder2, koder3)


const URL = 'http://www.google.com'
const PI = 3.1416


// scope
// let para variables
// const para constantes

// condicionales


// Concatenar variables
// operador typeof
let valor1 = 4
let valor2 = 5

console.log(valor1 + valor2)

// 'string' + variable
let koderExample = 'Jorge'
let nombreConcatendo = 'Hola ' + koderExample

console.log(nombreConcatenado)


// template strings + string  literals
// placeholders
// comillas invertidas ``
// `string ${variable} `
const age = 30
console.log(`Tienes ${age + 5} años`)




// After Break

// Pedir valores al usuario
// prompt(mensaje, valorDelMensajePorDefecto)

let nombreKoder = window.prompt('Dame tu nombre', 'Jorge')
// window es --> objeto
// prompt es --> método
// lo de () es --> parámetro
// se puede quitar 'window' de 'window.prompt' y usar solo 'prompt'

if(nombreKoder === null) {
    console.log('Nombre vacio')
} else {
    console.log(nombreKoder)
}




// Convertir strings a números 1
let ageKoder = prompt('Dame tu edad', 30)
console.log(ageKoder)
console.log(pasrseInt(ageKoder))


// Convertir strings a números 2
let NewageKoder = prompt('Dame tu edad', 30)
console.log(ageKoder)
console.log(pasrseInt(ageKoder))


// convertir ºC (Celsius) to ºF (Farenheits)
// pedir al usuario los grados celcius en su localidad
// celsius * 9/5 + 32
// calcular los ºF


let temperature = window.prompt('Escribe tu temperatura local')
    console.log('Temperatura en ºF', temperature * 9/5 + 32)


// Ahora en GitHub


