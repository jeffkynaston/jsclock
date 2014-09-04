$( document ).ready(function() {
    getCanvas()
    setInterval("keepTime()", 60);
});

function keepTime() {
    drawFrame()
    drawNumbers()
    drawCenter()
    var coords = moveHourHand()
    drawHourHand(coords.x,coords.y)
    var coords = moveMinuteHand()
    drawMinuteHand(coords.x,coords.y)
    var coords = moveSecondHand()
    drawSecondHand(coords.x,coords.y)
}

function getCanvas() {
	$canvas = document.getElementById("clock-canvas");
	$context = $canvas.getContext("2d");
}

function drawFrame() {
	$context.beginPath();
  $context.arc(300,300,300,0,Math.PI*2,true);
  $context.shadowColor   = 'rgba(200, 200, 200, 0)';
  $context.fillStyle = "#045476"
	$context.fill()
}

function drawNumbers() {
	$context.fillStyle    = '#fff';
	$context.font         = '40px sans-serif';	
	$context.fontWeight   = '300';	
	$context.shadowColor  = 'rgba(200, 200, 200, 0)';
	$context.fillText  ('1', 430, 110);
	$context.fillText  ('2', 510, 200);
	$context.fillText  ('3', 540, 315);
	$context.fillText  ('4', 510, 430);
	$context.fillText  ('5', 430, 520);
	$context.fillText  ('6', 290, 565);
	$context.fillText  ('8', 65, 430);
	$context.fillText  ('7', 150, 520);
	$context.fillText  ('9', 40, 315);
	$context.fillText  ('11', 130, 110);
	$context.fillText  ('10', 55, 200);
	$context.fillText  ('12', 280, 70);
}

function drawHourHand(xCoord, yCoord) {
		$context.beginPath();
    $context.moveTo(300,300);
    $context.lineTo(xCoord,yCoord);
    $context.lineWidth=7;
    $context.shadowOffsetX = 4;
		$context.shadowOffsetY = 4;
		$context.shadowBlur    = 3;
		$context.shadowColor   = 'rgba(150, 150, 150, 0.5)';
    $context.strokeStyle = '#fff';
    $context.stroke();
}

function drawMinuteHand(xCoord, yCoord) {
		$context.beginPath();
    $context.moveTo(300,300);
    $context.lineTo(xCoord, yCoord);
    $context.lineWidth=5;
    $context.shadowOffsetX = 4;
		$context.shadowOffsetY = 4;
		$context.shadowBlur    = 3;
		$context.shadowColor   = 'rgba(150, 150, 150, 0.5)';
    $context.strokeStyle = '#fff';
    $context.stroke();
}

function drawSecondHand(xCoord, yCoord) {
		$context.beginPath();
    $context.moveTo(300,300);
    $context.lineTo(xCoord, yCoord);
    $context.lineWidth=2;
    $context.shadowOffsetX = 4;
		$context.shadowOffsetY = 4;
		$context.shadowBlur    = 3;
		$context.shadowColor   = 'rgba(150, 150, 150, 0.5)';
    $context.strokeStyle = '#fff';
    $context.stroke();
}

function drawCenter() {
	$context.beginPath();
  $context.arc(300,300,12,0,Math.PI*2,true);
  $context.fillStyle = "#fff"
	$context.fill()
}