var numberOfSquares = 6;
var colours = [];
var pickedColour;
var modeButtons = document.querySelectorAll(".mode")
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")
colorDisplay.textContent = pickedColour;


init();

function init(){
	setupModeButtons();
    setupSquares();
    reset();
}

function	setupModeButtons(){
	//logic for difficulty buttons
    for(var i = 0; i < modeButtons.length; i++){
	    modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
        this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
        reset();
	    })
    }
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	reset();
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColour = this.style.background;
		//compare color to pickedColor
		if(clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!"
			changeColours(clickedColour);
			h1.style.background = clickedColour;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!"
		}
	});
}
}

function changeColours(colour){
	//loop through all squares
    for(var i = 0; i < squares.length; i++)
	//change each colour to match given
        squares[i].style.background = colour;
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length)
	return colours[random];
}

function generateRandomColours(num){
	//make an array
	var arr = []
	//add num random colours
	for(var i = 0; i < num; i++){
		//get random colour and push into array
        arr.push(randomColour())
	}
	//return array
	return arr;
}

function randomColour(){
	//pick a red from 0 - 255
	var r =Math.floor(Math.random() * 256)
	//pick a green from 0 - 255
	var g =Math.floor(Math.random() * 256)
	//pick a blue from 0 - 255
	var b =Math.floor(Math.random() * 256)
	//make into rgb 
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

//logic for reset button
resetButton.addEventListener("click", function(){
	reset();
})


// Logic for Reset
function reset(){
    colours = generateRandomColours(numberOfSquares);
	//pick a new random colour
	pickedColour = pickColour();
	//change colourDisplay to match pickedColour
	colorDisplay.textContent = pickedColour;
    //change message display back to empty
	messageDisplay.textContent = "";
	//reset title background colour
    h1.style.background = "steelblue";
    //change text back to new colours
    resetButton.textContent = "New Colours"
	//change colour of squares
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.background = colours[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}	}   }


