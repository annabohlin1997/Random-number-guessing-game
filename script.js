let randomNumber = Math.floor(Math.random() * 10 + 1);
	
let guesses = 1;
	
document.getElementById("submitGuess").onclick = function(){
	
let guessedNumber = document.getElementById("guessField").value;

if(randomNumber === guessedNumber)
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