

// Instrucciones


/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 
 * 1 con Object.entries() y
 *  Otra con .map()
 */
// solución con .entries()
// const makePairs = (object) =>  {

// }

const arrObj = (obj) => {
    return Object.entries(obj)
}

console.log(arrObj({a:1,b:2,c:3, d:4}))


// solución con .map()
const makePairsMap = (object) => {

}

const arrObjMap = (obj) => {
    
    let arrPro=Object.keys(obj)
    console.log(arrPro)
    let arrMap=[]
    arrPro.map((value, index)=>{
        let miniArr=[]
        miniArr.push(value, index+1)
        arrMap.push(miniArr)
    })
    return arrMap
}

console.log(arrObjMap({a:1,b:2,c:3,d:4}))



/**
 * Ejercicio 2.
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista 
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000] 
 */


 let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000
}


const sortedSal= (obj) => {
    let arrSal= Object.values(obj)
    console.log(arrSal)
    return arrSal.sort()
    // let arrSal1= arrSal.reverse().sort()
    // console.log(arrSal1)
 }



console.log(sortedSal(salarios))

















