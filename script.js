/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to the parameter: computersNumber
*/

let guessCounter =0;
function randomNumber(userGuess, computersNumber) {
  // YOUR CODE BELOW
  guessCounter ++;
  while(userGuess != computersNumber){
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
      return "Please input a number between 1 and 100"
    } else if(userGuess < computersNumber){
      return `Higher, that was guess number ${guessCounter}.`
    } else if(userGuess > computersNumber){
      return `Lower, that was guess number ${guessCounter}.`
    }
  }
  return `You're right! It was ${userGuess}. That took you ${guessCounter} guesses!`
 

    // YOUR CODE ABOVE
};



//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

let currentNumber = 1;

createGuess = () =>{
  currentNumber = Math.floor(Math.random() * 100);
}


function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...

    createGuess(num)
    return currentNumber;
 

}

function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
   if (reply === 'higher'){
    lowestPossible = currentNumber + 1;
    createGuess();
    return `Is your number ${currentNumber}?`
   } else if(reply === 'lower'){
    highestPossible = currentNumber -1;
    createGuess();
    return `Is your number ${currentNumber}?`
   } else{
    return `Your number was ${currentNumber}.`
   }

}

