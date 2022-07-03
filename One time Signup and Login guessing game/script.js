var board = document.querySelector("#userSignup");
var userWin=0;
var userLoose=0; 
var userReplay=0; 
var addAll=0;



document.querySelector("#submitButton").addEventListener("click", myFunc);

function myFunc(){
  const username = document.querySelector('#username').value;
  var password = document.querySelector('#password').value;
// checking eligibility
  if(username.length>=5 && password.length>=8)
  {
    board.innerHTML = `An account for ${username} is successfully created <br> 
    click below to Login <br> 
    <button id="loginSign">Go to Login</button>`;
  }
  else{
    alert('Please input a username with at least 5 characters and a password with at least 8 characters');
  }
  
  document.querySelector("#loginSign").addEventListener("click", myFuncLogin);
  function myFuncLogin(){
    board.innerHTML=`
    <form id="form"> 
    <fieldset> 
    <legend>Login</legend> 
    <input type="text" id="loginUsername" placeholder="Username" required>
    <input type="password" id="loginPassword" placeholder="Password" required> 
    <button id="loginButton">Login</button> 
    </form>
    </fieldset>
    `;
    document.querySelector('#loginButton').addEventListener("click", userLoginFunc);
    function userLoginFunc(){
      var loginUsername = document.querySelector('#loginUsername').value;
      var loginPassword = document.querySelector('#loginPassword').value;
      if(loginUsername != username || loginPassword != password){
        alert('Sorry, wrong credentials');
      }
      else{
        pageBody= document.querySelector('#pageBody');
        pageBody.innerHTML=`
        <h1>Guessing Game</h1>
        
        <div>
        <h3>Nice to have you checking our game ${username}</h3>

        <p>The range will be from 1 to 100</p>
        <p>You start with 5 guesses</p>
        Won:<span id="bigger">0</span>
        Lost:<span id="smaller">0</span>
        Replays:<span id="noneOfThem">0</span>
        Total:<span id="total">0</span> <br>
        <label for="userInput">Enter guess here</label>
        <br>
        <input type="number" id="userInput" class="userInput">
        <button id="verify">Verify</button>
        <p><span id="guessCount"></span></p>
        <button id="reset">Play again</button><br>
        <button id="logout" onclick="document.location.reload(true)">Logout</button>
        </div>`;
          document.querySelector('#reset').addEventListener("click", playAgain);
        
                    // adding action to the button
          document.querySelector("#verify").addEventListener("click", compare);
          // Returns a random integer from 1 to 100:
          var rightGuess = Math.floor(Math.random() * 100) + 1;
          const userInput = document.getElementById("userInput");
          const verify = document.getElementById("verify");
          const userHint = document.querySelector("#guessCount");
          

          // setting amount of guesses available at start using var because it will be changing with time
          var guessLeft=5;

          function compare(){
              
              var userGuess=document.querySelector("input").value;
              //converting to a number
              userGuess=Number(userGuess);
              //reducing amount of guesses
              guessLeft--;
              // console.log(rightGuess); =>logging answer in the console for testing purpose
              if(userGuess>100 || userGuess<0){
                    alert("From 1 to 100");
                    userHint.innerHTML=`${guessLeft} guess(es) left.`
              }
              else if(rightGuess>userGuess && guessLeft>0){
                  userHint.innerHTML=`You guessed ${userGuess}, and have ${guessLeft} guess(es) left. Try Bigger`;
              }
              else if(rightGuess<userGuess && guessLeft>0){
                userHint.innerHTML=`You guessed ${userGuess}, and have ${guessLeft} guess(es) left. Try smaller`;
              }
              else if(rightGuess==userGuess){
                  userHint.innerHTML=`You guessed ${userGuess}.Congrats ${username} You won!!!`;
                  verify.disabled=true;
                  userWin++;
              }
              else{
                  userHint.innerHTML=`Sorry ${username} You lost!!! <br> The answer was ${rightGuess}`;
                  verify.disabled=true;
                  userLoose++;
              }

          }
          function playAgain(){
           addAll++;
           userReplay=addAll-(userWin+userLoose); 
           guessLeft=5;
           rightGuess = Math.floor(Math.random() * 100) + 1;
           verify.disabled=false;
           userHint.innerHTML=""; 
           document.querySelector("#bigger").innerHTML=`${userWin}`;
           document.querySelector("#smaller").innerHTML=`${userLoose}`;
           document.querySelector("#noneOfThem").innerHTML=`${userReplay}`;
           document.querySelector("#total").innerHTML=`${addAll}`;
          }
      }
    }
  }
}
