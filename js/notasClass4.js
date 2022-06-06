
/*
while() {
    // sentence
}


let counter = 1
while (counter >= 10)
    console.log(`5 x ${counter} = ${ }`)



let counter = 1
while(counter <= 10) {
        console.log(` 5 x ${counter} = ${ 5 * counter } `)
        counter++
    }

*/



// Ejercicio 1

// imprimir cada caracter de un string -> pasar a while


/*

let str = 'Hola Koder'
let fin = str.length -1



// Solución con while

for(let i = 0; i < fin; i++){
    console.log(str[i])
} 


*/






// Ejercicio 2 -- after Break


/**
 * 'Hola Koder'
 * -> 'redok aloh'
 * Imprimir el string invertido
 * 
 * 
 */ 


/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 * 
 */ 


/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 * 
 */ 


let str = 'Hola koders'
let i = 0

while (i < str.length) {
    if (
        str == 'a' || 
        str == 'e' || 
        str == 'i' || 
        str == 'o' || 
        str == 'u' ||
        str == ' '
        ) {
    console.log(str[i])
    }
    i++
}


// Do While





