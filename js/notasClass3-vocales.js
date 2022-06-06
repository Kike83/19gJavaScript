
// Instrucciones del Ejercicio de hoy:


/**
 * 'Hola Koders'
 * Cuantas vocales existen
*/

/**
 * 'Hola Koders'
 * Cuantos caracteres son
*/

/**
 * 'Hola Koders'
 * Cortar el string en 2 strings 
 * -> "hola" "koders"
*/





/* 1.- Count Vocals 

// URL (https://www.programiz.com/javascript/examples/count-vowels)




// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

*/





/* 2.- 


/*


/**
 * 'Hola Koders'
 * Cuantos caracteres son


// program to check the number of occurrence of a character

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);

*/


/* 3.- 

/**
 * 'Hola Koders'
 * Cortar el string en 2 strings 
 * -> "hola" "koders"
*/



const message = "JavaScript is fun";

// divides the message string from space
let result = message.split(" ");
console.log(result);

// Output: [ 'JavaScript', 'is', 'fun' ]



