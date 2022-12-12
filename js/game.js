// Game section
const msgOne = document.getElementById('numOfGuess');
const msgTwo = document.getElementById('guessedNum');
const msgThree = document.getElementById('resultMsg');

let randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = 0;
let guessedNums = [];

//Game function get user number and checks if it higher or 
//lower or the correct number.
   function playGame() {
   const userGuess = document.getElementById('guessnum').value;
    if(userGuess < 1 || userGuess > 100) {
        alert('Please enter a number between 1 an d 100.');
    }

    else {
        if(userGuess < randomNumber){
            guessedNums.push(userGuess);
            guesses++;
            msgOne.textContent = "Number of guess " + guesses;
            msgTwo.textContent = "Previous guesses " + guessedNums;
            msgThree.textContent = "Your guess is too low try again. ";
           
        }
        else if (userGuess > randomNumber){
            guessedNums.push(userGuess);
            guesses++;
            msgOne.textContent = "Number of guess " + guesses;
            msgTwo.textContent = "Previous guesses " + guessedNums;
            msgThree.textContent = "Your guess is too high try again. ";
        }
        else {
            msgThree.textContent = "Congratulations you guessed the number!!";
        }
    }

 };

 //Restart game if user clicks on restart button
 function restartGame(){
    window.location.reload();
 }