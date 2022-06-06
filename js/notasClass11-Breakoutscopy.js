

// Breakouts




// Instrucciones de Jorge, por slack:

/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */



/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */




/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

//  const isAnObjectOrArray = (element) => {

// }











// de Noemí, por chat de zoom

let objSalarios = {
    lenny: "30000",
    Ernesto: "20000",
    jorge: "20000",
    Kike: "25000",
  };
  
  /**
   * Ejercicio 1:
   * Calcular el total de salarios
   * -> 95000
   
  */


  let auxTotal = 0; //variable auxiliar que suma las cantidades, debe iniciar en 0
  for (key in objSalarios) {
    //para iterar
  
    auxTotal += parseInt(objSalarios[key]);
  }
  
  console.log(auxTotal);
  
  


  /**
   * Ejercicio 2:
   * Pasar el ejercicio 1 a función flecha
   * Debe recibir 1 parametro
   * Objeto de salarios
   */
  
  const totalSalarios = (objeto) => {
    let auxTotal = 0; //variable auxiliar que suma las cantidades, debe iniciar en 0
    for (key in objeto) {
            //para iterar
      auxTotal += parseInt(objSalarios[key]);
    }
    return auxTotal;
  };
  console.log(totalSalarios(objSalarios));





// Noemí chat por zoom
// 9:50 pm

// let parametro = {
//     lenny: "30000",
//     Ernesto: "20000",
//     jorge: "20000",
//     Kike: "25000",
//   };

// let parametro = [1,2,3]
// let parametro = ''
// console.log(typeof(parametro)  );


// const isAnObjectOrArray = (element) => {
//     let retorno = '';
//     if (Array.isArray(element) ){
//         retorno = 'Es un array';
//     } else if( typeof(element) === 'object'){
//         retorno = 'Es un Objeto';
    
//     } else {
//         retorno = 'No es un array ni un objeto';
//     }

//     return retorno
// };

// console.log(isAnObjectOrArray(parametro));


