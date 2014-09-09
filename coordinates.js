function clockHand() {
	this.centerX = function() {
		return clockFace.centerX
	}
	this.centerY = function() {
	 	return clockFace.centerY
	}
	this.x = 300	
	this.y = 300
	this.color = "#fff"
}

hourHand = new clockHand()
hourHand.length = function() {
	return (clockFace.centerX/2)
}
hourHand.width = function() {
	return (clockFace.centerX/37.5)
}
hourHand.currentTime = function() {
	return new Date().getHours();
}
hourHand.adjustedTime = function() {
	var time = hourHand.currentTime()
	if (time > 14) {
		return (time -= 12)
	}
	return time
}
hourHand.angle = function() {
	var time = hourHand.adjustedTime()
	return ((time - 3) * 30) + (((new Date().getMinutes() * 6)/12))
}

minuteHand = new clockHand()
minuteHand.length = function() {
 return (clockFace.centerX/1.5)
}
minuteHand.width = function() {
	return (clockFace.centerX/60)
}
minuteHand.currentTime = function() {
	return new Date().getMinutes();
}
minuteHand.adjustedTime = function() {
	var time = minuteHand.currentTime()
	if (time < 15) {
		return (time += 60)
	}
	return time
}
minuteHand.angle = function() {
	var time = minuteHand.adjustedTime()
	return (((time - 15) * 6)) + (((new Date().getSeconds() * 6)/60))
}

secondHand = new clockHand()
secondHand.length = function() {
	return (clockFace.centerX/1.25)
}
secondHand.width = function() {
	return (clockFace.centerX/150)
}
secondHand.currentTime = function() {
	return new Date().getSeconds();
}
secondHand.adjustedTime = function() {
	var time = secondHand.currentTime()
	if (time < 15) {
		return (time += 60)
	}
	return time
}
secondHand.angle = function() {
	var time = secondHand.adjustedTime()
	return (((time - 15) * 6))
}


function moveHand(hand){
  var theta = hand.angle() * Math.PI / 180;
  hand.x = (hand.length()*(Math.cos(theta)) + hand.centerX())
  hand.y = (hand.length()*(Math.sin(theta)) + hand.centerY())
  return hand
}

