// How to generate a random number
var randomNumber = Math.ceil(Math.random() * 10);

// ask the user to guess the number 
var GuessNumber = prompt("Guess the Random Number between 1-10");

// we check if the user chose the correct number.
if(randomNumber == GuessNumber){
    alert("You Won")
}else{
    alert("You lost")
}

// alert if it is a correct number.