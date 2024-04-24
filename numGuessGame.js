let input = document.getElementById('input')
let answer = document.getElementById('answer');
let randomDiv = document.getElementById('randomNumber');


function addSmth(e) {
console.log(e.target.value);
input.value = e.target.value
}

function guessNumber() {
    let randomNumber = Math.ceil(Math.random() * 10); 
    randomDiv.style.display = 'block';
    
    let userGuess = input.value          // Number,bitwise(|) and + also can change the string to an integer()
    randomDiv.innerHTML = "Guessed Number: " + userGuess;

    if (input.value == '') {
        alert('please choose a number to play')
        answer.innerHTML = ''
        randomDiv.innerHTML = ''
    }

    else if (userGuess == randomNumber) {
        answer.innerHTML = 'Correct! The answer is ' + randomNumber;
        input.value = ''
    }
    else if (userGuess + 1 === randomNumber  || userGuess - 1 === randomNumber) {
        answer.innerHTML = 'very close! The answer is ' + randomNumber;
        input.value = ''
    }
    else {
        answer.innerHTML = 'Wrong! The answer is ' + randomNumber;
        input.value = ''
    }
}

function restartGame() {
        location.reload(); 
}