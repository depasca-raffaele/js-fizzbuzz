// crezione variabili
let three = false; //variabile che mi indica se il numero è divisibile per 3
let five = false; //variabile che mi indica se il numero è divisibile per 5

//richiedo un numero con cui giocare
const max = prompt('inserisci un numero');

//controllo integrita e coerenza
if(!isNaN(parseInt(max))){
    
    //inzio il ciclo di verifica sulla divisibilià
    for(i = 1; i<=max; i++){

        //verifica sulla divisibiltà per 3
        if(i % 3 == 0){
            three = true;
        }

        //verifica sulla divisibiltà per 5
        if(i % 5 == 0){
            five = true;
        }

        //stampa del numero in base ai risultati
        if(three == true && five == true){
            console.log(i + ' è FizzBuzz');
        }else if(three == true){
             console.log(i + ' è Fizz');
        }else if(five ==true){
             console.log(i + ' è Buzz');
        }else{
            console.log(i);
        }
        //reset delle variabili di controllo
        three = false;
        five = false;

    }
}else{
    //errore di inserimento
    console.error("non è un numero")
}