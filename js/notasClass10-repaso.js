

/**
 * Repaso -- arrow functionas
 * --> Parametros
 * --> Invocación de funciones
 * 
 */

// Declaración de la función
// a y b se llaman PARAMETROS
const suma = (a, b) => {
    // sentencias
    let total = a + b 
    return total
}

// invocar
// a y b se llaman ARGUMENTOS
// suma() --> invocar sin argumentos
// suma(2,3) --> con argumentos



/**
 * Repaso métodos de array
 * 
 * 
 * 
 */



// after Break
// 9.20 pm
// Instrucciones por slack

/**
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"]) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * .forEach()
 * .filter()
 * .reduce()
 *
*/


// de Noemi por chat


let array = [1, 2, "a", "b"];
//forach no retornar nada
//auxiliares meterlos dentro de la funsion
//
const filterArray = (arrayParameter) => {
let auxArray = [];
  arrayParameter.forEach((cv) => {
    if (typeof(cv) === "string") {
      auxArray.push(cv);     
    }    
  });
  return auxArray;
}
console.log(filterArray(array));



const filterArrayF = (arrayParameter) => {
    
     let filtrados = arrayParameter.filter((cv) => 
        typeof(cv) === "string"   
            
      );
      return filtrados;
    }
    console.log(filterArrayF(array));



// Noemi por slack
// al final de clase, me faltó darle las gracias
// Ejercicio 3



const reduceStrings = (array) => 
    array.reduce( (acc, cv, index, array) => {
       
        if (typeof(cv) === "string"){
            acc.push(cv);
        }       
      return acc;

    }, [])     



console.log(reduceStrings(array))



