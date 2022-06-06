

let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'], 
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]

/**
 * Ejercicio 3
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */



 const tarea1 = () => {
    console.log('Ejecutando tarea 1')
    let tbody = document.querySelector('tbody')
    koders.forEach( (koder, index, arr) => {
    
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        tdName.textContent = koder.name
        tr.appendChild(tdName)
        let tdAge = document.createElement('td')
        tdAge.textContent = koder.age
        tr.appendChild(tdAge)
        let tdGen = document.createElement('td')
        tdGen.textContent = koder.generation
        tr.appendChild(tdGen)
        console.log(tr)
        tbody.appendChild(tr)
        
    })
}

const tarea2 = () => {
    console.log('Ejecutando tarea 2')
    let tbody = document.querySelector('tbody')
    koders.forEach( (koder, index, arr) => {
    
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        tdName.textContent = koder.name
        tr.appendChild(tdName)
        let tdAge = document.createElement('td')
        tdAge.textContent = koder.age
        tr.appendChild(tdAge)
        let tdGen = document.createElement('td')
        tdGen.textContent = koder.generation
        tr.appendChild(tdGen)
        console.log(tr)
        tbody.appendChild(tr)
        
    })
}



const tarea3 = () => {
    console.log('Ejecutando tarea 3')
    let tbody = document.querySelector('tbody')
    koders.forEach( (koder, index, arr) => {
    
        let tr = document.createElement('tr')
        let tdName = document.createElement('td')
        tdName.textContent = koder.name
        tr.appendChild(tdName)
        let tdAge = document.createElement('td')
        tdAge.textContent = koder.age
        tr.appendChild(tdAge)
        let tdGen = document.createElement('td')
        tdGen.textContent = koder.generation
        tr.appendChild(tdGen)
        console.log(tr)
        tbody.appendChild(tr)
        
    })
}




// 10.03 pm

// sobre los de tarea
// Ejercicio 1




