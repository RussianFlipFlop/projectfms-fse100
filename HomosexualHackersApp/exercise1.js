//Switch to determine what to generate for the user to trace
var shape = 0;
//Exercise 1 random size variables
var xExercise1 = 0;
var yExercise1 = 0;
//array of checkpoints
var checkpoints = [];
var timer = 0;
var timerRun = false;

function exercise1(){
  
  //add 0.1 to timer every 6 frames (running at 60fps bydf)
    if (frameCount % 6 == 0 && timerRun) {
      timer = timer + 0.1;
    }
  
    noStroke();
  
  
	//On first run, generate the shape that we are going to use (Circle, Square, or Triangle)
	if(shape != 1 && shape != 2 && shape != 3){
		shape = floor(random(1,4));
		xExercise1 = floor(random(200, 401));
		yExercise1 = floor(random(200, 401));
        setupExercise1();
	}
    //no point in checking logic if the mouse isn't being pressed
    if(!mouseIsPressed) return;
	//Switch statement depending on what shape we have
	switch(shape){
		case 1: //Circle definition: function inCircle(radius, centerx, centery, px, py)
            myShape.insideRange(mouseX, mouseY, 0.62+difficulty/10);
			break;
		case 2: //Square definition: function inSquare(minx, miny, maxx, maxy, px, py)
			myShape.insideRange(mouseX, mouseY, 0.67+difficulty/10);
			break;
		case 3: //Triangle definition: function inTriangle(ax, ay, bx, by, cx, cy, px, py)
			inTriangleRange(500-xExercise1, 500+yExercise1, 500, 500-yExercise1, 500+xExercise1, 500+yExercise1, mouseX, mouseY, 0.52+difficulty/10);
			break;
		default:
			console.log("error");
	}
  
  //checkpoint logic
  for(var s of checkpoints){
    if(s.hit == 1 && s.final != 1) continue; //Save unneeded operations, previous red circles will still be visible
    if(s.inside(mouseX, mouseY)){
      //check if it is being hit 
      s.hit = 1;
      s.drawn = 0;
    }
    if(s.drawn == 0){
      //if the shape isn't drawn, draw it and indicate that it has been drawn
      s.display();
      s.drawn = 1;
    }
    if(s.hit == 0) return;
    //now I know I have the final checkpoint and it has been hit (on this frame)
    //move to end page here
  }
  
  
  
}
//First time setup for exercise 1 (also used to reset)
function setupExercise1(){
  acc = 0;
  counter = 0;
  total = 0;
  background(150, 120, 173);
  
  
  
  if(shape == 1){ //draw circle and setup checkpoints
        myShape = new Shapes(1, xExercise1, 0, width/2, height/2);
        myShape.display();
        checkpoint1 = new Checkpoint(500, 500-xExercise1, xExercise1/6, 0);
        checkpoint2 = new Checkpoint(500+xExercise1, 500, xExercise1/6, 0);
        checkpoint3 = new Checkpoint(500, 500+xExercise1, xExercise1/6, 0);
        checkpoint4 = new Checkpoint(500-xExercise1, 500, xExercise1/6, 0);
        checkpoint5 = new Checkpoint(500, 500-xExercise1, xExercise1/6, 1);
        checkpoints = [checkpoint1, checkpoint2, checkpoint3, checkpoint4, checkpoint5];
      }
      else if(shape == 2){ //draw square and setup checkpoints
        myShape = new Shapes(2, xExercise1, xExercise1, width/2, height/2);
        myShape.display();
        checkpoint1 = new Checkpoint(500+xExercise1, 500-xExercise1, xExercise1/6, 0);
        checkpoint2 = new Checkpoint(500+xExercise1, 500+xExercise1, xExercise1/6, 0);
        checkpoint3 = new Checkpoint(500-xExercise1, 500+xExercise1, xExercise1/6, 0);
        checkpoint4 = new Checkpoint(500-xExercise1, 500-xExercise1, xExercise1/6, 0);
        checkpoint5 = new Checkpoint(500+xExercise1, 500-xExercise1, xExercise1/6, 1);
        checkpoints = [checkpoint1, checkpoint2, checkpoint3, checkpoint4, checkpoint5];
      }
      else{ //draw triangle and setup checkpoints
        myShape = new Shapes(3, xExercise1, yExercise1, width/2, height/2);
        myShape.display();
        checkpoint1 = new Checkpoint(500-xExercise1, 500+yExercise1, xExercise1/6, 0);
        checkpoint2 = new Checkpoint(500, 500-yExercise1, xExercise1/6, 0);
        checkpoint3 = new Checkpoint(500+xExercise1, 500+yExercise1, xExercise1/6, 0);
        checkpoint4 = new Checkpoint(500-xExercise1, 500+yExercise1, xExercise1/6, 1);
        checkpoints = [checkpoint1, checkpoint2, checkpoint3, checkpoint4];
      }
      //On the first run I should display the first checkpoint, this avoids needing to put checkpoint logic in front of the 
      //mouse is not pressed return check
      checkpoints[0].display();
      //level design
      fill(105, 56, 135);
      noStroke();
      rect(0, 0, width, 100);
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 70);
      fill(255);
      textSize(30);
      text("Trace the image starting in the Green checkpoint and\n ending in the purple checkpoint.", width/2, 950);
     
}



//Helper functions for exercise 1 (and potentially later):
function inTriangle(ax, ay, cx, cy, bx, by, px, py){
  var w1 = (ax*(cy-ay)+(py-ay)*(cx-ax)-px*(cy-ay))/((by-ay)*(cx-ax)-(bx-ax)*(cy-ay));
  var w2 = (py-ay-w1*(by-ay))/(cy-ay);
  return w1>=0 && w2>=0 && (w1+w2)<=1;
}

function inTriangleRange(ax, ay, bx, by, cx, cy, px, py, range){
  var temp = ax-ax*range;
  if(inTriangle(ax+temp, ay-temp, bx, by+temp, cx-temp, cy-temp, px, py)){
	total++;
  }
  else if(inTriangle(ax-temp, ay+temp, bx, by-temp, cx+temp, cy+temp, px, py)){
	counter++;
	total++;
    drawCircle(true);
    return;
  }
  else total++;
  drawCircle(false);
}

function drawCircle(color){
  if (mouseY > 100) {
  if(color == true) fill('lime');
  else fill('red');
  noStroke();
  circle(mouseX, mouseY, 10);
    
  timerRun = true;
  }
}

class Shapes{
  
  //Shape constructor
  constructor(type, xLen, yLen, xCen, yCen){
    this.type = type;
    this.xLen = xLen; 
    this.yLen = yLen;
    this.xCen = xCen;
    this.yCen = yCen;
    this.shapeColor = color(255, 255, 255);
    this.strokeColor = color(0, 0 , 0);
    this.strokeWeight = 1;
  }
  //Set shape color with rgb values
  setShapeColor(R, G, B){
    this.shapeColor = color(R,G,B);
  }
  //Set strokeColor
  setStrokeColor(R, G, B){
    this.strokeColor = color(R, G, B);
  }
  //Set strokeWeight
  setStrokeWeight(weight){
    this.strokeWeight = weight;
  }
  //Display the shape
  display(){
    if(this.type == 1){
      //display circle
      fill(this.shapeColor);
      stroke(this.strokeColor);
      strokeWeight(this.strokeWeight);
      circle(this.xCen, this.yCen, this.xLen*2);
    }
    else if(this.type == 2){
      //display square/rectangle
      fill(this.shapeColor);
      stroke(this.strokeColor);
      strokeWeight(this.strokeWeight);
      rect(this.xCen-this.xLen, this.yCen-this.yLen, this.xLen*2, this.yLen*2);
    }
    else if(this.type == 3){
      //display triangle
      fill(this.shapeColor);
      stroke(this.strokeColor);
      strokeWeight(this.strokeWeight);
      triangle(this.xCen-this.xLen, this.yCen+this.yLen, this.xCen, this.yCen-this.yLen, this.xCen+this.xLen, this.yCen+this.yLen);
    }
  }
  //Inside of shape function
  inside(px, py){
    if(this.type == 1){
      //It is a circle
      return dist(px, py, this.xCen, this.yCen) <= this.xLen;
    }
    else if(this.type == 2){
      //It is a square/rectangle
      return (this.xCen-this.xLen<=px && px <= this.xCen+this.xLen) && (this.yCen-this.yLen<=py && py<=this.yCen+this.yLen);
    }
    else if(this.type == 3){
      //It is a triangle //500-xExercise1, 500+yExercise1, 500, 500-yExercise1, 500+xExercise1, 500+yExercise1
      var ax = this.xCen-this.xLen;
      var ay = this.yCen+this.yLen;
      var bx = this.xCen+this.xLen;
      var by = this.yCen+this.yLen;
      var cx = this.xCen;
      var cy = this.yCen-this.yLen;
      var w1 = (ax*(cy-ay)+(py-ay)*(cx-ax)-px*(cy-ay))/((by-ay)*(cx-ax)-(bx-ax)*(cy-ay));
      var w2 = (py-ay-w1*(by-ay))/(cy-ay);
      return w1>=0 && w2>=0 && (w1+w2)<=1;
    }
  }
  //inside of a range
  insideRange(px, py, range){
    var smallShape;
    var largeShape;
    
    if(this.type == 1){
      //Circle
      smallShape = new Shapes(1, this.xLen*range, 0, this.xCen, this.yCen);
      largeShape = new Shapes(1, this.xLen*(1/range), 0, this.xCen, this.yCen);
      if(smallShape.inside(px, py)){
        total++;
      }
      else if(largeShape.inside(px, py)){
        counter++;
        total++;
        drawCircle(true);
        return;
      }
      else total++;
      drawCircle(false);
    }
    else if(this.type == 2){
      //Square
      var temp = this.xCen-this.xLen-(this.xCen-this.xLen)*range;
      smallShape = new Shapes(2, this.xLen-2*temp, this.xLen-2*temp, this.xCen, this.yCen);
      largeShape = new Shapes(2, this.xLen+2*temp, this.xLen+2*temp, this.xCen, this.yCen);
      if(smallShape.inside(px, py)){
        total++;
      }
      else if(largeShape.inside(px, py)){
        counter++;
        total++;
        drawCircle(true);
        return;
      }
      else total++;
      drawCircle(false);
    }
  }
}