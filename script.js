// list all possible letters
// pick random number for the letters to pick which one to guess for
// create onkey event
//check if key matches selected letter, push it to "guesses so far"
//if it matches, user wins
//if it does not match, count down on guesses left
//after player is out of guesses, player loses
//
var letters=['a', 'c', 'd'];
var guessesLeft= 10;
var losses =0;
var wins =0;
var guessesSoFar =[];

var winsId =document.getElementById('wins');
var lossId =document.getElementById('losses');
var guessesLeftId =document.getElementById('guesses-left');
var guessesSoFarId =document.getElementById('guesses-so-far');
winsId.textContent=wins;


var chosenLetter= letters[Math.floor(Math.random() * letters.length)];
console.log(chosenLetter);
document.onkeyup = function(event){
	if(event.key === chosenLetter){
		console.log('You win');
		wins++;
		guessesSoFar.push(chosenLetter);
		winsId.textContent=wins;
		newGame();
	}
	//When the guess is wrong
	else{
		guessesLeft--;
		guessesSoFar.push(event.key);
		guessesLeftId.textContent=guessesLeft;
		guessesSoFarId.textContent=guessesSoFar;

	}
	if(guessesLeft===0){
		console.log('you lose!')
		losses++;
		lossId.textContent=losses;
		newGame();

	}
}

function newGame(){
	guessesLeft=10;
	guessesSoFar=[];
	chosenLetter= letters[Math.floor(Math.random() * letters.length)];
	guessesLeftId.textContent=guessesLeft;
	guessesSoFarId.textContent=guessesSoFar;

}