const userNumberElement = document.querySelector("#userNumber"),
  sendButton = document.querySelector("#sendButton"),
  resetButton = document.querySelector("#resetButton"),
  minNumberElement = document.querySelector("#minNumberElement"),
  maxNumberElement = document.querySelector("#maxNumberElement"),
  tipElement = document.querySelector("#tip"),
  guessesRemainigElement = document.querySelector("#guessesRemainigElement");

userNumberElement.addEventListener("input", handleNumberInput);
sendButton.addEventListener("click", guessNumber);
resetButton.addEventListener('click', start());

const minNumber = 0,
  maxNumber = 10,
  totalGuesses = 3;

let currentNumber, userNumber, guessesRemaining;

function start() {
  currentNumber = generateNumber();
  userNumber = minNumber;
  guessesRemaining = totalGuesses;

  userNumberElement.value = userNumber;
  minNumberElement.innerText = minNumber;
  maxNumberElement.innerText = maxNumber;
  tipElement.innerText = " ";
  guessesRemainigElement.innerText = guessesRemaining;

  userNumberElement.classList.remove("hidden");
  sendButton.classList.remove("hidden");
  resetButton.classList.add("hidden");
}

function generateNumber() {
  return Math.floor(Math.random() * (maxNumber + 1 - minNumber)) + minNumber;
}

function handleNumberInput(even) {
  let value = parseInt(event.target.value || userNumber || 0);
  value = handleMinMax(minNumber, value, maxNumber);
  userNumber = value;
  event.target.value = value;
}

function handleMinMax(min, number, max) {
  return Math.min(Math.max(number, min), max);
}

function guessNumber() {
  guessesRemaining--;
  guessesRemainigElement.innerText = guessesRemaining;
  if (currentNumber === userNumber){
    tipElement.innerText = `Acertou! O número é ${currentNumber}`;
    gamerOver();
  }else{
      if (guessesRemaining > 0){
        tipElement.innerText = `O número é ${currentNumber < userNumber ? `menor` : `maior`}`;
      }else{
        tipElement.innerText =  `Acabaram suas tentativas! O número era ${currentNumber}`;
        gamerOver();
      }
  }
}
function gamerOver(){
   userNumberElement.classList.add('hidden');
  sendButton.classList.add('hidden');
  resetButton.classList.remove('hidden');
}

start();
