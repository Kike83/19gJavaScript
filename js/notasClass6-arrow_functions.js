

//functionas

// arrow functionas --> funciones flecha


/**
 * 1. Declaración e invocación de funciones
 * 2. Funciones con parametros
 * 3. Funciones con parametros opcionales o valores por defectos
 * 4.- Funciones de retorno
 * 
 */




// la 4. de Retorno

// function retorno (a, b){
// a > b ? a : b
// }


// terminan --> funciones tradicionales
// comienzan --> arrow functionas




// sintaxys - función normal

// function suma (a, b){
    // sentencias
// }

// console.log ( suma(3, 5) )



// sintaxys - función con arrow

// declaración / inicialización
// Son 4 tipos:

// 1.- 
// const suma = (a, b) => {
//     return a + b
// }

// 2.- 
// const suma = (a, b) => {
//     return a + b
// }

// 3.- 
// const suma = (a, b) => {
//     return a + b
// }

// 4.- 
// const suma = (a, b) => {
//     return a + b
// }




// // string reverse
// // formula
// Decaración / inicialización
// const strReverse = ( str = 'koder' ) => {
//     let strReverse =''

//     for ( i = str.lenght -1 ; i >= 0 ; i--) {
//         strReverse += str[i]
//     }
//     return strReverse
// }

// // utilizar
// // invocar
// console.log (strReverse('Hola') )



// Breakout - Ejercicio 1

// const strReversed = () => {
//    s let str = prompt('Dame una palabra', 'Hola').toLowerCase()
//     let strReverse = ''
//     for ( i = str.length -1 ; i >= 0 ; i--) {
//         strReverse += str[i]
//     }
//     return strReverse
// }

// console.log(strReversed());



// Ejercicio 2
// const addThreeNumbers = (a, b, c = 3) => {
//     return a + b + c
// } 

// const getNumber = () => {
//     return parseInt (prompt('Indique un número', 1) )
// }

// const master = () => {
//     let y = getNumber()
//     let x = getNumber()
//     let w = getNumber()
    
//     if ( (y <= 0 || x <= 0) || (y <= 0 && x <= 0) || ()) {
//         console.log('Faltan datos')
//     } else {
//         return addThreeNumbers (y, x, w)
//     }
// }


// console.log(master() )



// after Break

// Arrow function
// Pedir al usuario cadena de texto
// Verificar si esa oración es un palindromo 
// palindromo -- se puede leer al revés, como Jorge Github
// isPalindrome ('hola') --> No es un palindromo
// isPalindrome ('oso') --> Sí es un palindromo

// anita lava la tina
//oso
// seres

// Cuando llegué:
// Noemi proyectando, con ayuda de Víctor y Cris, y poco yo también

// Sí quedó y rapidísimo
// Me impresionaron -- kbron

const isPalindrome = ( str ) => {

    let auxSinEspacios = '';
     for (i = 0; i < str.length; i++) {
         if (str[i] !== ' '){
             auxSinEspacios += str[i];
         }
        
       }
 
     let auxStrReversed = "";
     for (i = auxSinEspacios.length - 1; i >= 0; i--) {
       auxStrReversed += auxSinEspacios[i];
     }
     
     console.log(auxSinEspacios );
     console.log(auxStrReversed );
    return auxSinEspacios === auxStrReversed ? true : false;
 
 }
 
 
 let palabra = prompt('Ingresa una palabra');
 
 console.log(isPalindrome(palabra) ? 'Es palindromo' : 'No es palindromo');

// Noemi por chat de zoom
// qué codigo tan limpio
// fue increíble copy-paste del chat al .js, y se vio directo en navegador



