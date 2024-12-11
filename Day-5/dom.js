let inputBox = document.getElementById("inputBox");
let result = document.getElementById("result");
let guessCount = document.getElementById("guessCount");

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

let noOfCount = 3


function checkNumber() {
    if (inputBox.value == randomNumber) {
        alert("Your are right");
        result.textContent = "Right"
    }
    else {
        noOfCount--
        if (noOfCount == 0) {
            alert("You Lost the game: " + randomNumber)
        }
        guessCount.textContent = "Available guess : " + noOfCount
        result.textContent = "Wrong"
    }
}