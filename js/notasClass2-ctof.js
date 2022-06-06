
// Convertir los ºC to ºF
// Imprimir en la consola

let celcius = prompt('Temperatura actual', 23)
if( celcius === null ) {
    console.log('Temperatura incorrecta')
} else {
    let far = parseInt(celcius) * 9/5 + 32
    console.log('La temperatura actual es de ${far} ºF')
}



