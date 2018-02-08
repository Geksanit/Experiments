function GenX(i)//начальные координаты
{ var x0=window.innerWidth/2, y0=window.innerHeight/2,
			r = Math.random()*(Set.maxR -Set.minR)+Set.minR,
			x = x0+Math.random()*(-2r)+r,
			y = Math.sqrt(r*r-(x-x0)*(x-x0))+y0;
 	if(Math.round(Math.random())){y=-y}
 	stars[i].x = x;
 	stars[i].y = y;
};
	
var
star={x: 10, y: 10, color: 'rgba(255,0,0,1)', mass: 2, radius: 2, size:1, vx: 1, vy: 1,};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     ||  
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var W = window.innerWidth, H = window.innerHeight;
canvas.width = W;
canvas.height = H;

var particleCount = 150,
	particles = [],
	minDist = 70,
	dist;
	var Set={
	Time : 1,// коэф. времени
	G : 1,//гравитационная постоянная
	Color : 'rgba(0, 0, 0, 0.1)',//длина хвоста/цвет перекраски
	Radius : 0.5,//коэф.размера звезд
	W : window.innerWidth,//границы
	H : window.innerHeight,
	};

function paintCanvas() // Function to paint the canvas black
{
	ctx.fillStyle = Set.Color;
	ctx.fillRect(0,0,Set.W,Set.H);
}
		
function rc()//случайный цвет
{
	var r=Math.floor(Math.random() * (256));
	var g=Math.floor(Math.random() * (256));
	var b=Math.floor(Math.random() * (256));
	return '#'+ r.toString(16) + g.toString(16) + b.toString(16);
}

function Particle()//Genesis
{
	this.x = Math.random() * W;
	this.y = Math.random() * H;
	this.vx = -1 + Math.random() * 2;
	this.vy = -1 + Math.random() * 2;
	this.mass = Math.random()*(10-1)+1;
	this.radius = this.mass*Set.Radius;
	this.color = rc();
	this.draw = function()
	{
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fill();
	};
}
	
for(var i = 0; i < particleCount; i++)//заполнение массива
{
	particles.push(new Particle());
}

function draw()// will get re-painted in each next frame
{// Call the function that will draw the balls using a loop
	paintCanvas();
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		p.draw();
	}
	update();//Finally call the update function
}

function update()// Give every particle some life
{// In this function, we are first going to update every
	// particle's position according to their velocities
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		
		// Change the velocities
		p.x += p.vx;
		p.y += p.vy;
			
		// We don't want to make the particles leave the
		// area, so just change their position when they
		// touch the walls of the window
		if(p.x + p.radius > W) 
		{p.x = p.radius}
		
		else if(p.x - p.radius < 0) {
			{p.x = W - p.radius}
		}
		
		if(p.y + p.radius > H) 
		{p.y = p.radius}
		
		else if(p.y - p.radius < 0) {
			p.y = H - p.radius;
		}

		for(var j = i + 1; j < particles.length; j++) {
			p2 = particles[j];
			distance(p, p2);
		}	
	}
}

// Distance calculator between two particles
function distance(p1, p2) {
	var dist,
		dx = p1.x - p2.x,
		dy = p1.y - p2.y;
	
	dist = Math.sqrt(dx*dx + dy*dy);
			
	// Draw the line when distance is smaller
	// then the minimum distance
	if(dist <= minDist) {
		
		// Draw the line
		ctx.beginPath();
		ctx.strokeStyle = "rgba(255,255,255,"+ (1.2-dist/minDist) +")";
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
		ctx.closePath();
		
		// Some acceleration for the partcles 
		// depending upon their distance
		var ax = dx/2000,
			ay = dy/2000;
		
		// Apply the acceleration on the particles
		p1.vx -= ax;
		p1.vy -= ay;
		
		p2.vx += ax;
		p2.vy += ay;
	}
}

// Start the main animation loop using requestAnimFrame
function animloop() {
	draw();
	requestAnimFrame(animloop);
}

animloop();