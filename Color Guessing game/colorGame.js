var mode = 6;
var colors= generateRandomColors(mode);
var squares = document.querySelectorAll(".Square");
var pickedColor = pickcolors();
var message = document.querySelector("#message");
var colordis = document.querySelector("#colordis");
colordis.textContent = pickedColor;
var easy= document.querySelector("#Easy");
var hard= document.querySelector("#Hard");
var h1=document.querySelector("h1");
var h2=document.querySelector("h2");
var reset=document.querySelector("#Restart");

easy.addEventListener("click", function(){
	mode = 3;
	newz(mode);
	easy.classList.add("selected");
	hard.classList.remove("selected");
	for(var i=3;i<6;i++){
		squares[i].style.background="#232323";
	}
});
hard.addEventListener("click", function(){
	mode= 6;
	newz(mode);
	easy.classList.remove("selected");
	hard.classList.add("selected");
	for(var i=3;i<6;i++){
		squares[i].display="block";
	}
})
reset.addEventListener("click", function(){
	newz(mode);
	reset.textContent = "Reset";
	});
for(var i=0 ; i<squares.length ; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var colorclicked = this.style.background;
		console.log(colorclicked,pickedColor);
		if(colorclicked === pickedColor){
			message.textContent = "You Win";
			reset.textContent = "Play Again";
			changecolor(colorclicked);
			h1.style.background = colorclicked; 
		} 

		else{
		
			this.style.background= "#232323";
		}
	});
}
function changecolor(color){
	for (var i = 0; i<squares.length; i++){
		squares[i].style.background= color;
	}
}
function pickcolors(){
	var c=colors.length
var random=Math.floor(Math.random()*c)
return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
	arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
var red=Math.floor(Math.random()*256);
var green=Math.floor(Math.random()*256);
var blue=Math.floor(Math.random()*256);
var rgb="rgb("+red+", "+green+", "+blue+")";
return rgb;
}
function newz(mode){
	colors = generateRandomColors(mode);
	pickedColor = pickcolors();
	colordis.textContent = pickedColor;
	h1.style.background= "steelblue";
	h2.textContent= "";

	for(var i=0 ; i<squares.length ; i++){
	squares[i].style.background = colors[i];
}
}