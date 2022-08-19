//Create a reference for canvas 
Canvas = document.getElementById('myCanvas')
AudioContext.getContext("2d")
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y = 225;


//Set initial position for a car image.

function add() {
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground;
	greencar_imgTag.src = background_image;

	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0 , 0, canvas.width, canvas.height );
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, 0 , 0, greencar_width, greencar_height, greencar_x, greencar_y);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0){
greencary = greencar_y - 10;
console.log("When up ARROW IS PRESSED, x =" + greencar_x + "| y =" + greencar_y);
uploadBackground();
uploadgreencar();

	}
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
