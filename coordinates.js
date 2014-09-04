var d = new Date();

// adjusting hours for coordinate system
var currentHour = d.getHours();
if (currentHour > 14) {
	currentHour -= 12
}
var currentMinute = d.getMinutes();
if (currentMinute < 15) {
	currentMinute += 60
}
var currentSecond = d.getSeconds();
if (currentSecond < 15) {
	currentSecond += 60
}

// with this coord system, 0,0 is actually at 3:00
// subtract 1/4th of the time available in one rotation, and multply by 360/total time available
// Ajust hours to start partway between current and next
var t1Angle = ((currentHour - 3) * 30) + (((d.getMinutes() * 6)/12)) // starting point for hour hand
var t2Angle = (((currentMinute - 15) * 6)) + (((d.getSeconds() * 6)/60)) // starting point for minute hand
var t3Angle = ((currentSecond - 15) * 6) // starting point for second hand
var t1AngleSpeed = .36666666666/60/60; // speed of the hour hand
var t2AngleSpeed = .36666666666/60; // speed of the minute hand
var t3AngleSpeed = .36666666666; // speed of the second hand
var ccX = 300; // circle center coordinate X, should be same as the center of the clock face
var ccY = 300; // circle center coordinate Y, should be same as the center of the clock face
var t1Radius = 150; // length of hour hand
var t2Radius = 200; // length of minute hand
var t3Radius = 240; // length of second hand


function moveHourHand(){
    var theta = t1Angle * Math.PI / 180;
    var xCoord = (t1Radius*(Math.cos(theta)) + ccX)
    var yCoord = (t1Radius*(Math.sin(theta)) + ccY)
    t1Angle += t1AngleSpeed;
    t1Angle %= 360;
    var hourHandCoords = {
    	"x": xCoord,
    	"y": yCoord
    }
    return hourHandCoords
}

function moveMinuteHand(){
    var theta = t2Angle * Math.PI / 180;
    var xCoord = (t2Radius*(Math.cos(theta)) + ccX)
    var yCoord = (t2Radius*(Math.sin(theta)) + ccY)
    t2Angle += t2AngleSpeed;
    t2Angle %= 360;
    var minuteHandCoords = {
    	"x": xCoord,
    	"y": yCoord
    }
    return minuteHandCoords
}

function moveSecondHand(){
    var theta = t3Angle * Math.PI / 180;
    var xCoord = (t3Radius*(Math.cos(theta)) + ccX)
    var yCoord = (t3Radius*(Math.sin(theta)) + ccY)
    t3Angle += t3AngleSpeed;
    t3Angle %= 360;
    var secondHandCoords = {
    	"x": xCoord,
    	"y": yCoord
    }
    return secondHandCoords
}
