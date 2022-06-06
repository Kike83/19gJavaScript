
/**
 * Tema de hoy: Objetos
 * 
 */


// construcción:
// propiedad: valor,
// key: value,



// objeto 'koder'

let koder = {
    name: 'Kike',
    generation: '19',
    bootcamp: 'Javascript',
    horario: '7-10 PM',
    isActive: true,
    isInactive: false,
    isGithub: true,
    location: 'Mexico City',
    modules: {
        js: true,
        maketado: true,
        backend: false,
        react: false,
    }


}

console.log(koder)


let generation = koder.generation
let pasoBackend = koder.modules.backend

//let backednPassed = koder.modules.backend
// let backendPassed = koder['modules'].backend
// let backendPassed = koder['modules']['backend']


console.log(generation, pasoBackend)


// Diferente de null, undefined, NaN => true


/*
if( pasoBackend === true) { // se omite el 'true'
    console.log('Si paso el modulo de backend')
}

if( pasoBackend ) { // se omite el 'true'
    console.log('Si paso el modulo de backend')
}


if( pasoBackend ) { // se omite el 'true'
    console.log(` ${ koder.name } Sí paso el modulo de backend y tiene el horario ${ koder.horario[0]}`)
}
*/


koder.isActive ? 'activo' : 'inactivo'


// Ejercicio indiviual
// 8:01 pm

console.log(`Hola, soy el koder ${ koder.name }`)
console.log(`Soy parte de la generación ${ koder.generation } en el bootcam sobre ${ koder.bootcamp }`)



// Creando nuevas propiedades


let car = {}

car['model'] = 'jetta'
// car.model = 'jetta'

console.log(car)


// Ejercicio
// Volver a crear 'koder'
// pero ahora, crear las propiedades

let koderAssign = {}

koderAssign.name = 'Kike'
koderAssign.generation = '19g'
koderAssign.horario = '7-10 PM'
koderAssign.isActive = true,
koderAssign.isInactive = false,
koderAssign.isGithub = true,
koderAssign.location = 'Mexico City',

console.log(koderAssign)


// koderAssign.modules.js = true,
// koderAssign.modules.maketado = true,
// koderAssign.modules.backend = false,
// koderAssign.modules.react = false,






// Sobre este último ejercicio

// nested objects
// objeto dentro de Objeto
// --> con DOT notation

let koderAssign2 = {}

koderAssign2.name = 'Kike'
koderAssign2.generation = '19g'
koderAssign2.horario = '7-10 PM'
koderAssign2.isActive = true,
koderAssign2.isInactive = false,
koderAssign2.isGithub = true,
koderAssign2.location = 'Mexico City',

koderAssign2.modules = {}
koderAssign2.modules.maketado = true,
koderAssign2.modules.backend = false,
koderAssign2.modules.react = false,


console.log(koderAssign2)






// objeto dentro de Objetos
// --> con Braket notation
// Ejercicio 3

let koderAssign3 = {}

koderAssign3['name'] = 'Kike'
koderAssign3['generation'] = '19g'
koderAssign3['horario'] = '7-10 PM'
koderAssign3['isActive'] = true,
koderAssign3['isInactive'] = false,
koderAssign3['isGithub'] = true,
koderAssign3['location'] = 'Mexico City',

koderAssign3['modules'] = {}
koderAssign3.modules['maketado'] = true,
koderAssign3.modules['backend'] = false,
koderAssign3.modules['react'] = false,


console.log(koderAssign3)


// para cuando choca:
koderAssign3['last-name'] = 'Kike' // porque last-name el '-' no funciona
koderAssign3['lastName'] = 'Kike' // es correcto

// 



let salarios = {
    'Jorge' : '20000',
    'Lenny' : '30000',
    'Kike' : '25000',
    'Ernesto' : '20000',
}



// Si quisieramos imprimir todos
// En lugar de imprimir cada uno:
    // console.log(salarios.Jorge)
    // console.log(salarios.Lenny)
    // console.log(salarios.Kike)
    // console.log(salarios.Ernesto)
// iteramos objetos

    //console.log(salarios['Ernesto'])





// Iterando las propiedades-de-Objetos 
// bucles- ciclos

for( elemento in salarios ) {
    console.log(elemento)
    console.log(salarios[elemento])
}


for( elemento in salarios) {
    let key = elemento
    let val = salarios[elemento]
    console.log(key, val)
}

// Estructura dentro de la llave en el objeto
// for( key in objeto )



// Break


//  9.23pm regresé de Break


// Instrucciones del Ejercicio





