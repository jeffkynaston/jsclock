function clockHand() {
	this.centerX = 300
	this.centerY = 300
	this.x = 300
	this.y = 300
	this.color = "#fff"
}

hourHand = new clockHand()
hourHand.length = 150
hourHand.width = 8
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
minuteHand.length = 200
minuteHand.width = 5
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
secondHand.length = 240
secondHand.width = 2
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
  hand.x = (hand.length*(Math.cos(theta)) + hand.centerX)
  hand.y = (hand.length*(Math.sin(theta)) + hand.centerY)
  return hand
}

