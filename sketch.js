// https://p5js.org/reference/#group-Shape
function setup() {
  // setup runs once

	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	rectMode(CENTER);
	ellipseMode(CORNER);
  background(128);
	strokeWeight(5);
	point(width/4, height/2);
	strokeWeight(10);
	line(0 ,0 ,width,height);
	strokeWeight(0);
	fill(55);
	rect(10, 10, 20, 30);
	circle(50, 70, 20)
	
}
