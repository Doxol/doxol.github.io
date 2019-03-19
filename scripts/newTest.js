/*
 * Based heavily off of https://codepen.io/doms/pen/BZLezr
 * I had originally given up on the idea because I figured with the implementation
 * that I had in mind, it would be too slow to implement. Upon seeing Dominic's
 * implementation running smoothly, however, I decided I'd give it a shot. I 
 * had essentially the same implementation in mind so I was excited to find out
 * that it ran more or less quickly and efficiently. I did not want to use p5.js though,
 * so I ended up trying to replicate his code without the use of p5.js. This resulted
 * in what seems to be a noticably slower implementation. While unfortunate that I 
 * still ended up in the same place as when I started, I've put it in enough time and
 * effort into this that I feel the user can just disable javascript for my page if it
 * bothers them.
 */

class Particle {
	constructor() {
		this.x = Math.random() * innerWidth;
		this.y = 0;
		this.speed = (Math.random() * 1.2) + 1.0;
		//this.width = 30;
		//this.width = (Math.random() * 20) + 10; //using different sized fonts seems to affect performance by a lot
		ctx.font = "30px monospace"
		this.residue = [];
		this.timer = 0;
		this.reset();
	}

	reset() {
		this.y = 10;
		this.timer = 0;

	}


	draw() {

		var gradient = ctx.createLinearGradient(this.x, this.y - (120), this.x, this.y);
		gradient.addColorStop("0", "black");
		gradient.addColorStop("1.0", "lime");
		ctx.fillStyle = gradient;
		if (this.timer == 0){
			for (let k = 0; k < 4; k++){
				let char = String.fromCharCode(Math.floor((Math.random() * 109) + 33));
				this.residue.unshift(char);
			}
			if (this.residue.length > 4){
				this.residue.length = 4;
			}
		}

		for (let j = 0; j < this.residue.length; j++){
			if ((this.residue.length - 1 - j) >= 0){
				ctx.fillText(this.residue[this.residue.length - 1 - j], this.x, this.y - (30 * j));
			}
		}

		this.timer++;

		if ((this.speed * this.timer) >= (2)){
			this.timer = 0;
		}
		if (this.y > (innerHeight + 120)) {
			this.reset();
		}

		this.y += this.speed * 12;
	}
}

var particles = [];
var canvas = document.createElement('canvas');
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
var ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
setInterval(this.draw, 64);


function draw() {

	ctx.clearRect(0,0,innerWidth, innerHeight);

	if (particles.length < 60) {
		particles.push(new Particle());
	}

	for (let i = 0; i < particles.length; i++){
		particles[i].draw();
	}
}


