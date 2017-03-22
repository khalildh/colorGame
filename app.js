var squares = document.getElementsByClassName('squares');
var buttons = document.getElementsByClassName('button');
var twoEM = document.getElementsByClassName('twoEM');
var h1 = document.getElementsByTagName('h1')[0];
var youWon = document.getElementsByClassName('youWon')[0];
youWon.innerHTML = ""
console.log(h1)


var hard = true;
var easy = false;
var winner = "";

buttons[0].addEventListener("click", function() {
	if(hard){
		newGameHard();
	}
});

for (var i = squares.length - 1; i >= 0; i--) {
	console.log("white")
	squares[i].addEventListener("click", function() {
		test = "background-color: " + winner + ";";
		console.log(test);
		if(this.getAttribute("style") !== test) {
			console.log(this.getAttribute("style"));

			this.style.backgroundColor = "rgb(35, 35, 35)";
			if (this.style.backgroundColor === "rgb(35, 35, 35)" && youWon.innerHTML !== "You Won.") {
				youWon.innerHTML = "Try Again.";
			}
		} else {
			// h1 to color of this;
			for (var j = squares.length - 1; j >= 0; j--) {
				console.log("yeah")
				squares[j].style.backgroundColor =  "rgb(35, 35, 35)";
			}
			this.style.backgroundColor = winner;
			h1.style.backgroundColor = winner;
			youWon.innerHTML = "You Won.";
		}
	});
}




function randNum(num) {
	var randNumVar = Math.floor(Math.random() * num);
	return randNumVar
}


function randColor(){
	var r = randNum(256);
	var g = randNum(256);
	var b = randNum(256);
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return [color, r, g, b];
}


function newColors() {
	square6 = []
	for (var i = squares.length - 1; i >= 0; i--) {
		var addThisColor = randColor()
		squares[i].style.backgroundColor = addThisColor[0];
		square6.push(addThisColor[0])
	}
	console.log(square6)
	return square6
}

newGameHard();

function newGameHard() {
	square6 = newColors();
	winner = square6[randNum(6)]
	console.log(winner)
	twoEM[0].innerHTML = winner;
	winnerIdx = square6.indexOf(winner);
	console.log(winnerIdx);
	h1.style.backgroundColor = "steelblue";
	youWon.innerHTML = "";


}

