$( document ).ready(function() {

    console.log( "Drawing Clock" );
});

function getCanvas() {
	$canvas = document.getElementById("clock-canvas");
	$context = $canvas.getContext("2d");
}

