var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById('random');

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ "," 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background;
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function randomize() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomize);

setGradient();
