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
    }
    // riconosco i multipli di 3
    else if (Number.isInteger(i / 3) == true) {
        console.log('Fizz');
    }
    // riconosco i multipli di 5
    else if (Number.isInteger(i / 5) == true) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}





