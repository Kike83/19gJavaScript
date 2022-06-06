

// OjO SUPER IMPORTANTE
// en Consola - mandar llamar --> la función



// Ejercicio 1

// function addDivisors(){
//     let suma=0
//     for (let i = 1 ; i <= 100 ; i++){
//         if (i % 3 == 0 ){
//             suma+=i
//         } else if (i % 5 == 0){
//             suma+=i
//         } else if( i % 7 == 0){
//             suma+=i
//         }
//     } console.log(suma)
// }





// Ejercicio 2

// addDivisors()

// function addNumbers(){
//     counter= Number(prompt('Dame un número:'))
//     suma=0
//     while (counter >= 0){
//         suma+=counter
//         counter--
//     }
//     console.log(suma)
// }



// Ejercicio 3

// function addCharacter(){
//     let string = prompt('Dame una oración:')
//     let fin = string.length - 1
//     let counter2 = 0
//     let vowelsA=0
//     let vowelsE=0
//     let vowelsS=0
//     do{
//         switch (string.toLowerCase()[counter2]){
//             case 'a':
//                 vowelsA++
//                 break
//             case 'e':
//                 vowelsE++
//                 break
//             case ' ':
//                 vowelsS++
//                 break
//             default:
//                 break
//         }
//         counter2++
//     }while (counter2 <= fin)
//     console.log(`Lestas a son: ${vowelsA}`)
//     console.log(`Lestas e son: ${vowelsE}`)
//     console.log(`Espacios son: ${vowelsS}`)
// }





// Ejercicio Final de Clase

// Realiza una funcion
// Que pida al usuario 3 numeros
// retorne la suma de esos 3 numeros
// los 3 numeros deben pasarse como parametros


function suma (Numero1, Numero2, Numero3){
    let total = 0
    total = Numero1 + Numero2 + Numero3
    return total
}
 console.log(suma)
    

















