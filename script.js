	// random value generated
	let randomNumber = Math.floor(Math.random() * 10 + 1);
	
	// counting the number of guesses
	// made for correct Guess
	var guesses = 1;
	
	document.getElementById("submitGuess").onclick = function(){
	
var guessedNumber = document.getElementById("guessField").value;

if(randomNumber == guessedNumber)
{	
	alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
			+ guesses + " GUESSES ");
}
else if(randomNumber > guessedNumber)
{	
	guesses++;
	alert("TOO LOW! GUESS AGAIN!");
}
else
{
	guesses++;
	alert("TOO HIGH! GUESS AGAIN!")
}
}