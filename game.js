const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("=== Number Guessing Game ===");
console.log("Guess a number between 1 and 100.");

function askGuess() {
    rl.question("Your guess: ", (answer) => {
        const guess = Number(answer);

        if (!answer.trim() || isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Enter a valid number between 1 and 100!");
            askGuess();
            return;
        }

        attempts++;

        if (guess === secretNumber) {
            console.log("Correct! You won!");
            console.log("Attempts: " + attempts);
            rl.close();
        } 
        else if (guess < secretNumber) {
            console.log("The secret number is BIGGER!");
            askGuess();
        } 
        else {
            console.log("The secret numbe is SMALLER!");
            askGuess();
        }
    });
}

askGuess();
