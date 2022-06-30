// adding action to the button
document.querySelector("#verify").addEventListener("click", compare);
var guessLeft=5;
// Returns a random integer from 1 to 100:
const rightGuess = Math.floor(Math.random() * 100) + 1;
const userInput = document.getElementById("userInput");
const verify = document.getElementById("verify");
const userHint = document.querySelector("span");

function compare(){
    
    var justGuess=document.querySelector("input").value;
    //converting to a number
    var userGuess=Number(justGuess);
    //reducing amount of guesses
    guessLeft--;
    // console.log(rightGuess); if you want to test it
    if(rightGuess<userGuess && guessLeft>0){
        userHint.innerHTML=`You guessed ${userGuess}, and have ${guessLeft} guess(es) left. Try smaller`;
    }
    else if(rightGuess>userGuess && guessLeft>0){
        userHint.innerHTML=`You guessed ${userGuess}, and have ${guessLeft} guess(es) left. Try Bigger`;
    }
    else if(rightGuess==userGuess){
        userHint.innerHTML=`You guessed ${userGuess}. You won!!!`;
        verify.disabled=true;
    }
    else{
        userHint.innerHTML=`You lost!!! <br> The answer was ${rightGuess}`;
        verify.disabled=true;
    }

}

