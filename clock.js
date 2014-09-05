$( document ).ready(function() {
    getCanvas()
    setInterval("keepTime()", 60);
});

function getCanvas() {
	$canvas = document.getElementById("clock-canvas");
	$context = $canvas.getContext("2d");
}

function keepTime() {
    drawFrame()
    drawNumbers()
    drawCenter()
    drawLogo()
    drawTitle()
    var coords = moveHourHand()
    drawHourHand(coords.x,coords.y)
    var coords = moveMinuteHand()
    drawMinuteHand(coords.x,coords.y)
    var coords = moveSecondHand()
    drawSecondHand(coords.x,coords.y)
}

function drawFrame() {
	$context.beginPath();
  $context.arc(300,300,290,0,Math.PI*2,true);
  $context.shadowColor   = 'rgba(200, 200, 200, 0)';
  $context.fillStyle = "#045476"
	$context.fill()
	$context.strokeStyle = '#fff';
	$context.lineWidth=10;
	$context.stroke()
}

function drawLogo() {
	var imageObj = new Image();
	imageObj.src = 'kg-logo-white.png';
	$context.drawImage(imageObj, 265, 380);
}

function drawTitle() {
	$context.fillStyle    = '#fff';
	$context.font         = '400 50px Raleway';		
	$context.shadowColor  = 'rgba(200, 200, 200, 0)';
	$context.textBaseline = 'middle'
	$context.textAlign = 'center'
	$context.font = '200 20px Raleway';
	$context.fillText  ("Object Oriented JavaScript Clock", 300, 210);
}

function drawNumbers() {
	$context.fillStyle    = '#fff';
	$context.font         = '400 50px Raleway';		
	$context.shadowColor  = 'rgba(200, 200, 200, 0)';
	$context.textBaseline = 'middle'
	$context.textAlign = 'center'
	
	for (i=1;i<13;i++) {
		var degrees = i*30 - 90
		var theta = degrees * Math.PI / 180;
		var xCoord = (240*(Math.cos(theta)) + 300)
	  var yCoord = (240*(Math.sin(theta)) + 300)
		$context.fillText  ((i).toString(), xCoord, yCoord);
	}

}

function drawCenter() {
	$context.beginPath();
  $context.arc(300,300,12,0,Math.PI*2,true);
  $context.fillStyle = "#fff"
	$context.fill()
}

function drawHourHand(xCoord, yCoord) {
		$context.beginPath();
    $context.moveTo(300,300);
    $context.lineTo(xCoord,yCoord);
    $context.lineWidth=7;
    styleHands()
    $context.stroke();
}

function drawMinuteHand(xCoord, yCoord) {
		$context.beginPath();
    $context.moveTo(300,300);
    $context.lineTo(xCoord, yCoord);
    $context.lineWidth=5;
    styleHands()
    $context.stroke();
}

function drawSecondHand(xCoord, yCoord) {
		$context.beginPath();
    $context.moveTo(300,300);
    $context.lineTo(xCoord, yCoord);
    $context.lineWidth=2;
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