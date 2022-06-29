/* I used button as selector just because there is only one button,
make sure you are more precise with your selector */

document.querySelector("button").addEventListener("click", myFunc);
function myFunc(){
    var desiredEmail = document.querySelector('#email').value;
    var letUserKnow = document.querySelector('#submited').innerHTML=`${desiredEmail} is subscribed!`;
}
