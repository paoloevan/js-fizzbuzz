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
for (i = 1; i < 101; i++){
    console.log(i);
}

// riconosco i multipli di 3
if (Number.isInteger(i/3) == true){
    i = "Fizz"
}

// riconosco i multipli di 5
if (Number.isInteger(i/5) == true){
    i = "Buzz"
}

// riconosco i multipli di 3 e di 5
if ((Number.isInteger(15/3) == true) && (Number.isInteger(15/3) == true)){
    i = 'FizzBuzz'
}