let randomNumber = Math.ceil(Math.random() * 10); 
let input = document.getElementById('input');
let answer = document.getElementById('answer');
let randomDiv = document.getElementById('randomNumber');

randomDiv.innerHTML = "Random Number: " + randomNumber;

function guessNumber() {
    randomDiv.style.display = 'block';
    let userGuess = parseInt(input.value);            // Number,bitwise(|) and + also can change the string to an integer()

    if (userGuess === randomNumber) {
        answer.innerHTML = 'Correct! The answer is ' + randomNumber;
    } else {
        answer.innerHTML = 'Wrong! The answer is ' + randomNumber;
    }
}

function restartGame() {
        location.reload(); 
}