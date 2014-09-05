var ccX = 300; // circle center coordinate X, should be same as the center of the clock face
var ccY = 300; // circle center coordinate Y, should be same as the center of the clock face
var hourHandRadius = 150; // length of hour hand
var minuteHandRadius = 200; // length of minute hand
var secondHandRadius = 240; // length of second hand


function moveHourHand(){
	var d = new Date();
	var currentHour = d.getHours();
	if (currentHour > 14) {
		currentHour -= 12
	}
	var hourHandAngle = ((currentHour - 3) * 30) + (((d.getMinutes() * 6)/12)) // starting point for hour hand
  var theta = hourHandAngle * Math.PI / 180;
  var xCoord = (hourHandRadius*(Math.cos(theta)) + ccX)
  var yCoord = (hourHandRadius*(Math.sin(theta)) + ccY)
  var hourHandCoords = {
  	"x": xCoord,
  	"y": yCoord
  }
  return hourHandCoords
}

function moveMinuteHand(){
	var d = new Date();
  var currentMinute = d.getMinutes();
	if (currentMinute < 15) {
		currentMinute += 60
	}
  var minuteHandAngle = (((currentMinute - 15) * 6)) + (((d.getSeconds() * 6)/60))
  var theta = minuteHandAngle * Math.PI / 180;
  var xCoord = (minuteHandRadius*(Math.cos(theta)) + ccX)
  var yCoord = (minuteHandRadius*(Math.sin(theta)) + ccY)
  var minuteHandCoords = {
  	"x": xCoord,
  	"y": yCoord
  }
  return minuteHandCoords
}

function moveSecondHand(){
	var d = new Date();
	var currentSecond = d.getSeconds();
	if (currentSecond < 15) {
		currentSecond += 60
	}
	var secondHandAngle = ((currentSecond - 15) * 6)
  var theta = secondHandAngle * Math.PI / 180;
  var xCoord = (secondHandRadius*(Math.cos(theta)) + ccX)
  var yCoord = (secondHandRadius*(Math.sin(theta)) + ccY)
  var secondHandCoords = {
  	"x": xCoord,
  	"y": yCoord
  }
  return secondHandCoords
}
