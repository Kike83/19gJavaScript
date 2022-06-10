


// 7.22 pm
// sobre la tarea

// Francisco dudas,


// 7.35
// firebase / login con gmail (enrique.berdichevsky@gmail.com)
// Rama 18



// firebase
// IR a consola
// agregar un nuevo proyecto



// Create an XMLHttpRequest object
// usande la estructura de -ajax- y -ajaxGET- de ayer

const xrhPosts = new XMLHttpRequest()
xhrPosts.onload = (response) => {
  if(response.target.status >= 200 && response.target.status <= 399) {
    if(response.target.responseText ≠ ''){
      let posts = JSON.parse(response.target.responseText)printPosts(posts)
    }
  }
}

// GET, DELETE, POST, PATCH, PUT

xhrPosts.open("GET", "json placeholder", false)
xhrPosts.send( )



// 8:00 pm



// GET
// VERBOS http --> (GET, POST, PUT, PATCH, DELETE)

/*
POST
para CREATE user en firebase

const.createUsers = { objUser } => {
  console.log(objUser)


  const xhttp = new XMLHttpRequest())
  xhttp.open(
    "POST"
    "https://koders19gjs-fec69-default-rtdb.firebaseio.com/.json",
    true,
  )



  xhttp.onload = function(data) {
    if(data.target.status >= 200 && data.target.status === 399) {
      console.log(data)
    }
  }

  xhttp.send( JSON.stringify(objUser) )
  // JSON.parse(texto) --> obj
  // JSON.strinify(obj) --> texto
  // antes de payload
  // al usar POST, PUT, PATCH
}


let user = {
  name: 'Kike',
  lastName: 'Koala'
  age: 31
} 

*/









// 8.41 pm
// Jorge por slack

// Simples 3 pasos:
// 1.- te asegura la URL: para el firebase mio, de Jorge, de Abraham,
// 2.- mandar llamar en Consola --> createUser(user)

/*
const createUser =  ( objUser ) => {
  console.log(JSON.stringify(objUser))
  const xhttp = new XMLHttpRequest()
  xhttp.open( "POST",  
    "https://koders19gjs-fec69-default-rtdb.firebaseio.com//users/.json", true)
  xhttp.onload = function(data) {
    console.log(data)
      if(data.target.status >= 200 && data.target.status <= 399){
          console.log(data.target.response)
      }
  }
  xhttp.send( JSON.stringify(objUser) )
}

let user =  {
  name: 'Kike',
  lastName: 'Koala',
  age: 31
}

OjO --> falta escribir en Consola --> para MANDAR petición
// createUsers( user )

*/





// 9.20 pm
// after break

const updateUser = ( userUpdated ) => {

  const updatedxhr = new XMLHttpRequest()
  updatedxhr.open('PATCH', 
  '', 
  true)
}

updatedxhr.onload = (response) => {
  if(response.target.status >= 200 && response.target.status >= 399){
    console.log(response.target)
    console.log(response.target.response)
  }
}
// updatedxhr.send( JSON.stringify(userUpdated))

// updateUser( {
//   name: 'Kike',
//   lastName: 'Koala',
//   age: 31
// })


// 9.40pm
// hasta aquí explicó: PATCH



// Ahora: PUT

// con PUT, actualizar solo name


// 9:50 pm
// Ahora va a explicar: DELETE

// La URL apunta al recurso para ser eliminado

// 9.56 pm
// logré cambiar el built-in themes del JSON-Viewer
// no-en incógnito




// 9.59 pm
// UPDATE

// por slack: la función de DELETE

const deleteUser  = ( idUser ) => {
  const deletexhr = new XMLHttpRequest()
  deletexhr.open(
    'DELETE', 
    `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
    true
  )
  deletexhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      console.log(response.target.response)
    }
  }
  deletexhr.send()
}

// deleteUser('-N4ALCYqt3eSCpiePs-g')

// no pude borrar el mío
// que frustrante, no es tan dificil, pero no jala




// 10.12 pm
// cómo acceder a cada usuario


// Jorge hacer un ejercicio
// imprimir todos los usuarios

const printUsers = (users) => {
  
}


