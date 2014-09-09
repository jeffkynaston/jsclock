$( document ).ready(function() {
    getCanvas()
    bindAllListeners()
    setInterval("keepTime()", 60);
});

function getCanvas() {
	$canvas = document.getElementById("clock-canvas");
	$context = $canvas.getContext("2d");
}

function bindAllListeners() {
	$('.size').on('input', resize)
	$('.size').on('change', resize)
}

function keepTime() {
		$context.clearRect(0, 0, $canvas.width, $canvas.height);
    drawFrame(clockFace)
    drawNumbers(clockFace)
    drawCenter(clockFace)
    drawLogo()
    drawTitle(clockFace)
    moveHand(hourHand)
    drawHand(hourHand)
    moveHand(minuteHand)
    drawHand(minuteHand)
    moveHand(secondHand)
    drawHand(secondHand)
}

function resize() {
	clockFace.centerX = parseInt(this.value)
	clockFace.centerY = parseInt(this.value)
	$('.display').height(parseInt(this.value))
	$('.display').width(parseInt(this.value))
	$('canvas').attr({width: this.value*2, height: this.value*2})
	$('canvas').css("top", "" + ((600-(parseInt(this.value)*2))/2) + "px")
	$('canvas').css("left", "" + ((600-(parseInt(this.value)*2))/2) + "px")

}

var clockFace = {
	"color": "#045476",
	"borderColor": "#fff",
	"centerX": 300,
	"centerY": 300,
}

function drawFrame(clock) {
	$context.beginPath();
  $context.arc(clock.centerX,clock.centerY,(clock.centerX*(290/300)),0,Math.PI*2,true);
  $context.shadowColor   = 'rgba(200, 200, 200, 0)';
  $context.fillStyle = clock.color
	$context.fill()
	$context.strokeStyle = clock.borderColor;
	$context.lineWidth=(clock.centerX*(10/300))
	$context.stroke()
}

function drawLogo() {
	var imageObj = new Image();
	this.width = function() {
		return (80*(clockFace.centerX/300))
	}
	this.height = function() {
		return (87*(clockFace.centerX/300))
	}
	imageObj.src = 'kg-logo-white.png';
	$context.drawImage(imageObj, (clockFace.centerX-(this.width()/2)), (clockFace.centerX+this.height()), this.width(), this.height());
}

function drawTitle(clock) {
	$context.fillStyle    = '#fff';
	$context.font         = '400 '+ (clock.centerX/6) + 'px Raleway';		
	$context.shadowColor  = 'rgba(200, 200, 200, 0)';
	$context.textBaseline = 'middle'
	$context.textAlign = 'center'
	$context.font         = '200 '+ (clock.centerX/15) + 'px Raleway';
	$context.fillText  ("Object Oriented JavaScript Clock", clock.centerX, (clock.centerY*(210/300)));
}

function drawNumbers(clock) {
	$context.fillStyle    = '#fff';
	$context.font         = '400 '+ (clock.centerX/6) + 'px Raleway';		
	$context.shadowColor  = 'rgba(200, 200, 200, 0)';
	$context.textBaseline = 'middle'
	$context.textAlign = 'center'
	
	for (i=1;i<13;i++) {
		var degrees = i*30 - 90
		var theta = degrees * Math.PI / 180;
		var xCoord = ((clock.centerX*0.8)*(Math.cos(theta)) + clock.centerX)
	  var yCoord = ((clock.centerY*0.8)*(Math.sin(theta)) + clock.centerY)
		$context.fillText  ((i).toString(), xCoord, yCoord);
	}

}

function drawCenter(clock) {
	$context.beginPath();
  $context.arc(clockFace.centerX,clockFace.centerY,(clock.centerX*0.04),0,Math.PI*2,true);
  $context.fillStyle = "#fff"
	$context.fill()
}

function drawHand(hand) {
		$context.beginPath();
    $context.moveTo(hand.centerX(),hand.centerY());
    $context.lineTo(hand.x,hand.y);
    $context.lineWidth=hand.width();
    styleHands()
    $context.stroke();
}

function styleHands() {
	$context.shadowOffsetX = 4;
	$context.shadowOffsetY = 4;
	$context.shadowBlur    = 3;
	$context.shadowColor   = 'rgba(125, 125, 125, .5)';
  $context.strokeStyle = '#fff';
}