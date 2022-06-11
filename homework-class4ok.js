


const phrase = prompt('Escribe una frase').toLowerCase()
let vowels = ''
let consonants = ''
for(let i = 0; i < phrase.length; i++ ){
    
	if(phrase[i] !== ' ' && phrase[i] !== ',' && phrase[i] !== '.'){
		if(
			phrase[i] == 'a' || 
			phrase[i] == 'e' || 
			phrase[i] == 'i' || 
			phrase[i] == 'o' || 
			phrase[i] == 'u' || 
			phrase[i] == 'á' || 
			phrase[i] == 'é' || 
			phrase[i] == 'í' || 
			phrase[i] == 'ó' || 
			phrase[i] == 'ú'
		){
			vowels += phrase[i]
		} else {
            console.log(phrase[i])
			consonants += phrase[i]
		}
	}
}
console.log(vowels)
console.log(consonants)