let secretNumber= Math.floor(Math.random()*10)+1;
console.log(secretNumber);
let userGuess=Number(prompt("Guess a number between 1 and 10"));
console.log(userGuess);
while(secretNumber!=userGuess){
if(userGuess>secretNumber){
    console.log("Too High");
}
else {
    console.log("Too low");
}
userGuess=Number(prompt("Guess again"));
}
console.log("Correct! You guessed the correct number.");