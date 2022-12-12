const username = document.getElementById('username');
const age = document.getElementById('age');
const form = document.getElementById('form');
const errormsj = document.getElementById('error');

// Validation check for user input
form.addEventListener('submit', (e) => {
    let messages = [];
    let numbers = /^[0-9]+$/;
    if(username.value === '' || username.value == null){
        alert('Name is required')
    } 
    var x=document.forms["form"]["age"].value;
    if (isNaN(x)) 
    {
     alert('Input must be a number');
     e.preventDefault()
    }

    if(messages.length > 0){
        e.preventDefault()
        errormsj.innerText = messages.join(', ')
    }  
});

// // Game section
// var msgOne = document.getElementById('numOfGuess');
// var msgTwo = document.getElementById('guessedNum');
// var msgThree = document.getElementById('resultMsg');

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let guesses = 0;
// let guessedNums = [];

// //Game function get user number and checks if it higher or 
// //lower than the correct number.
//    function playGame() {
//    const userGuess = document.getElementById('guessnum').value;
//     if(userGuess < 1 || userGuess > 100) {
//         alert('Please enter a number between 1 an d 100.');
//     }
  
//     else {

//         if(userGuess < randomNumber){
//             msgThree.textContent = "Your guess is too low try again. ";
//         }
//         else if (userGuess > randomNumber){
//             msgThree.textContent = "Your guess is too high try again. ";
//         }
//         else {
//             msgThree.textContent = "Your guessed the number!!";
//         }
//     }

//  };




