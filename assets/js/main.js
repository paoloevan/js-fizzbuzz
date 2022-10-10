/*
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz” al posto del numero
//e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
*/

/* strumenti
let-const
if
for
*/


// stampa numeri da 1 a 100
for (i = 1; i < 101; i++) {
    // riconosco i multipli di 3 e 5
    if ((Number.isInteger(i / 3) == true) && (Number.isInteger(i / 5) == true)) {
        console.log('FizzBuzz');
        // selezione elemento della DOM 
        let fizzBuzzEl = document.querySelector('.fizz_buzz');
        // Creo nodo div
        let divEl = document.createElement('div');
        // appendo al div il numero / stringa 
        divEl.append('FizzBuzz');
        // aggiungo la classe al div
        divEl.classList.add('fizzbuzz_style', 'col-1');
        // appendo il div al container
        fizzBuzzEl.append(divEl);
    }
    // riconosco i multipli di 3
    else if (Number.isInteger(i / 3) == true) {
        console.log('Fizz');
        // selezione elemento della DOM 
        let fizzBuzzEl = document.querySelector('.fizz_buzz');
        // Creo nodo div
        let divEl = document.createElement('div');
        // appendo al div il numero / stringa 
        divEl.append('Fizz');
        // aggiungo la classe al div
        divEl.classList.add('fizz_style', 'col-1');
        // appendo il div al container
        fizzBuzzEl.append(divEl);
    }
    // riconosco i multipli di 5
    else if (Number.isInteger(i / 5) == true) {
        console.log('Buzz');
        // selezione elemento della DOM 
        let fizzBuzzEl = document.querySelector('.fizz_buzz');
        // Creo nodo div
        let divEl = document.createElement('div');
        // appendo al div il numero / stringa 
        divEl.append('Buzz');
        // aggiungo la classe al div
        divEl.classList.add('buzz_style', 'col-1');
        // appendo il div al container
        fizzBuzzEl.append(divEl);
    }
    else {
        console.log(i);
        // selezione elemento della DOM 
        let fizzBuzzEl = document.querySelector('.fizz_buzz');
        // Creo nodo div
        let divEl = document.createElement('div');
        // appendo al div il numero / stringa 
        divEl.append(i);
        // aggiungo la classe al div
        divEl.classList.add('col-1');
        // appendo il div al container
        fizzBuzzEl.append(divEl);
    }
}





