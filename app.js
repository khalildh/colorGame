var squares = document.getElementsByClassName('squares');
var buttons = document.getElementsByClassName('button');
var twoEM = document.getElementsByClassName('twoEM');
var h1 = document.getElementsByTagName('h1')[0];
var youWon = document.getElementsByClassName('youWon')[0];
var hard = true;
var gameOver = false;
var winner = "";

buttons[0].addEventListener("click", function() {
	buttons[0].innerHTML = "NEW COLORS"
	console.log(hard);
	if(hard === true){
		newGame(newGameCallBack);
	} 
	else {
		newGame(newGameCallBack);
	}
});

buttons[1].addEventListener("click", function() {
	hard = false;
	newGame(newGameCallBack);
});

buttons[2].addEventListener("click", function() {
	hard = true;
	newGame(newGameCallBack);
});

// The Grand for Loop otherwise known as Better than Justin...
for (var i = squares.length - 1; i >= 0; i--) {
	squares[i].addEventListener("click", function() {
		test = "background-color: " + winner + ";";
		if(this.getAttribute("style") !== test) {

			this.style.backgroundColor = "rgb(35, 35, 35)";
			
			if (this.style.backgroundColor === "rgb(35, 35, 35)" && youWon.innerHTML !== "You Won.") {
				youWon.innerHTML = "Try Again.";
				if (gameOver === false) {
					this.classList.add("visibility");
				}
			}
		} else {

			if (hard === true) {
				for (var j = squares.length - 1; j >= 0; j--) {
					squares[j].style.backgroundColor =  winner;
					squares[j].classList.remove("visibility");
				}
			}

			else {
				for (var j = 0; j <= 2; j++) {
					squares[j].style.backgroundColor =  winner;
					squares[j].classList.remove("visibility");
				}
			}

			this.style.backgroundColor = winner;
			h1.style.backgroundColor = winner;
			youWon.innerHTML = "Correct!";
			gameOver = true;
			buttons[0].innerHTML = "PLAY AGAIN?"
		}
	});
}

newGame(newGameCallBack);

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
	if (hard === true) {
		for (var i = squares.length - 1; i >= 0; i--) {
			var addThisColor = randColor()
			squares[i].style.backgroundColor = addThisColor[0];
			square6.push(addThisColor[0])
		}
	}
	else {
		for (var i = squares.length - 4; i >= 0; i--) {
			var addThisColor = randColor()
			squares[i].style.backgroundColor = addThisColor[0];
			square6.push(addThisColor[0])
		}
	}	
	return square6
}

function newGame(callback) {
	if (hard === false)  {
		callback(3);
	}
	else {
		callback(6);
	}
}

function newGameCallBack(par) {
	if (hard === false) {
		for (var j = squares.length - 1; j >= 3; j--) {
			squares[j].style.backgroundColor =  winner;
			squares[j].classList.add("visibility");
		}
	}
	else {
			for (var j = squares.length - 1; j >= 3; j--) {
			squares[j].style.backgroundColor =  winner;
			squares[j].classList.remove("visibility");
		}
	}
	square6 = newColors();
	console.log(square6)
	winner = square6[randNum(par)]
	twoEM[0].innerHTML = winner;
	winnerIdx = square6.indexOf(winner);
	h1.style.backgroundColor = "steelblue";
	youWon.innerHTML = "";
}