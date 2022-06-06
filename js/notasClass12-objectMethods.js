

/*
Metodos de objetos
Sintaxis
Object.methodName()


*/




// CRUD

// Método #1
// Object.keys()

let obj = {
    'name': 'Kike',
    'LastName': 'Koala'
}

// ['name', 'LastName']

let arrKeys = [] 
for( propiedad in obj ) {
    console.log(propiedad)
    arrKeys.push(propiedad)
}

console.log(arrKeys)

let llaves = Object.keys( obj )
console.log(llaves)

// str.method()
// arr.method()
// Object.method()

llaves.forEach((llave)=> {
    console.log(obj[llave])
})

// Arriba, en una sola línea,
// Abajo, por separado, no es sostenible:

console.log(obj['name'])
console.log(obj['LastName'])




// Método #2
// Objecto.assign ()
// Benja

// Sintaxis
// Object.assign(obj, obj)

let obj1 = {
    name: 'kike'
}

let obj2 = {
    lastName : 'koala'
}

Object.assign(obj1, obj2)

console.log(obj1)
console.log(obj2)

// sirve para clonar




// Franciso
// Método #3
// 8.02 pm

// Object.entries()
// --> []





let resultEntries = Object.entries(obj)
console.log(resultEntries)


// de objeto a Array



// Ernesto
// Método # 4
// 8.09 pm

// Object.values( obj )
// --> [value1, value2, ...]

let result 


// Object.create()
// Object.values()
// Object.entries()
// Object.freeze()
// Object.seal()


// Xavy
// Método # 5
// Object.freeze()


// Xavy me nombró a mí
// Kike
// Método #6

// Object.create()

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: false,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();



// de Jorge

// Object.create( obj )

let koderBase = {
    name: 'basename',
    lastName: 'baseLastName',
}

let newKoder = Object.create( koderBase )

console.log(newKoder)

console.log(newKoder.name)
console.log(newKoder.lastName)

newKoder.age = 40
newKoder.name = 'Sorpresa'

console.log(newKoder)



// Jorge
// 8.33 pm
// Método #7

// Object.seal()

// usando de ejemplo freeze

let objSeal = {
    'name': 'kike',
    'lastName': 'Acosta',
}

// Object.freeze(objSeal)
// objSeal.name = 'otro nombre'

// console.log(objSeal)


Object.seal(objSeal)
//objSeal.age = 30
// delete objSeal['lastName']
delete objSeal.lastName

console.log(objSeal)

// es similar al freeze
// freeze --> lo congela, solo lectura, no te deja eliminar
// seal --> lo congela, solo actualizaciones y lectura





// 8.43 pm

// los + comunes:

// Object.create()
// Object.keys()
// Object.values()
// Object.entries()

// y poco común:

// Object.freeze()
// Object.seal()

// esto es: CREAR el objeto:
let objLiteral = {
}
// esto también, pero menos común:
let objCopia = Object.create (objLiteral)


// let objEmpleado = {
//     name: 'kike',
//     age: '30',
//     salario: 3000,
//     puesto: 'Gerente',
//     idEmpleado: 1000,
// }

let salarios = {
    'jorge' = 300,
    'mario' = 400,
    'juan' = 500,
    'Cris' = 700,   
}



let totalEmpleados = Object.keys(salarios).length
// 1.- usando -- reduce

// 2.- usando -- forEach
let totalFinal = 0
Object.values(salarios)
    .reduce( (salario) => acc + salario )

// 2.- usando -- for



console.log('totalEmleados', totalEmpleados)
console.log('total', total)




