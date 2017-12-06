var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

var r = 0;
var g = 255;
var b = 0;

//ctx.beginPath();
ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
var orix = -1;
var oriy = -1;

var points = [];
var oldPoints = []
lastPoint = 0;

var colorChange = -1;
var number = -1;

document.body.onkeyup = function(e){
    if(e.keyCode == 32){

    	ctx.beginPath();

    	for (var i = 0; i < points.length; i += 2){
    		ctx.lineTo(points[i], points[i+1]);
    	}
    	ctx.lineTo(points[0], points[1]);
    	ctx.fill();


      oldPoints = points;
    	points = [];
    	lastPoint = 0;

    	orix = -1;
    	oriy = -1;
    }

    else if (e.key == 'x'){
      var origColor = ctx.fillStyle;


      for (var j = 0; j < random(3, 20); j++){
        var yOff = random(-50, 50);
        var xOff = random(-50, 50);
        
        ctx.beginPath();
        for (var i = 0; i < oldPoints.length; i += 2){
          ctx.lineTo(oldPoints[i] + xOff, oldPoints[i+1] + yOff);
        }
        ctx.lineTo(oldPoints[0] + xOff, oldPoints[1] + yOff);

        var newR = r + random(-120, 120);
        var newG = g + random(-120, 120);
        var newB = b + random(-120, 120);


        ctx.fillStyle = 'rgb(' + (r + random(-10, 10)) + ', ' + (g + random(-10, 10)) + ', ' + (b + random(-10, 10)) + ')';

        ctx.fillStyle = 'rgb(' + newR + ', ' + newG + ', ' + newB + ')';

        ctx.fill();
      }
      ctx.fillStyle = origColor;

    }

    else if (e.key == 'r'){
    	number = 0;
    	colorChange = 0;
    }
    else if (e.key == 'g'){
    	number = 0;
    	colorChange = 1;
    }
    else if (e.key == 'b'){
    	number = 0;
    	colorChange = 2;
    }



    else if (e.key == '0'){
    	number *= 10;
    }
    else if (e.key == '1'){
    	number *= 10;
    	number += 1;
    }
    else if (e.key == '2'){
    	number *= 10;
    	number += 2;
    }
    else if (e.key == '3'){
    	number *= 10;
    	number += 3;
    }
    else if (e.key == '4'){
    	number *= 10;
    	number += 4;
    }
    else if (e.key == '5'){
    	number *= 10;
    	number += 5;
    }
    else if (e.key == '6'){
    	number *= 10;
    	number += 6;
    }
    else if (e.key == '7'){
    	number *= 10;
    	number += 7;
    }
    else if (e.key == '8'){
    	number *= 10;
    	number += 8;
    }
    else if (e.key == '9'){
    	number *= 10;
    	number += 9;
    }
    else if (e.keyCode = '13'){
    	if (!(colorChange == -1)){
    		if ((number >= 0) && (number <= 255)){
	    		if (colorChange == 0){
	    			r = number;
	    		}
	    		else if (colorChange == 1){
	    			g = number;
	    		}
	    		else if (colorChange == 2){
	    			b = number;
	    		}
	    		ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    		}
    		number = -1;
    		colorChange = -1;
    	}
    }
}

function mouse(event){
	var x = event.clientX;
	var y = event.clientY;

	if (orix == -1)
		orix = x;
	if (oriy == -1)
		oriy = y;

	points[lastPoint] = x;
	points[lastPoint+1] = y;

	lastPoint = lastPoint + 2;

	ctx.beginPath();
	ctx.arc(x, y, 2, 0, 2 * Math.PI);
	ctx.fill();

}

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}