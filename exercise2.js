var earths;
var run2;
var exercise2Count;
var started;
var exercise2Hits;
var insideGlobe;

function exercise2(){
  
  var lightPurple = color(150, 120, 173);
  var darkerPurple = color(67, 36, 87);
  var darkPurple = color(105, 56, 135);

  while(oneRun2) {
    earths = [];
    run2 = true;
    exercise2Count = 0;
    exercise2Hits = 0;
    started = 0;
    oneRun2 = false;
    insideGlobe = true;
    outsideGlobe = false;
  }
  
  //end here
  if(exercise2Count == 30+difficulty*10) endPage();
  //run once
  while(run2){
    runOnceEx2();
    run2 = false;
  }
  //test if they have met the starting conditions
  if(mouseIsPressed && zone.inside(mouseX, mouseY)){
    started = 1;
  } 
  //test the mouse location
  if(!zone.inside(mouseX, mouseY) && started == 1){
    //increment lives or whatever you want to do when they fail
    endPage();
  }
  setupExercise2();
  
  strokeWeight(0);
  fill(darkPurple);
  rect(0, 0, width, 100);
  fill(220)
  textSize(55);
  text('MotoSkill©', width/2, 70);
  
  textSize(35);
  text('Dodge the falling globes!', width/2, 425);
  textSize(25);
  text('[You can adjust difficulty in settings.]', width/2, 475);

  textSize(55);
  fill(255);
  if (mouseX < 48 || mouseX > 92 || mouseY < 38 || mouseY > 65) {
    textFont('Calibri');
    text('←', 70, 70);
    textFont(silom);
  } else {
    fill(150, 120, 173);
    textFont('Calibri');
    text('←', 70, 70);
    textFont(silom);
    if (mouseIsReleased) {
      exercise2count = 0;
      started = 0;
      exercise = 0;
      scene = -3;
      oneRun2 = true;
    }
  }
  text('Press To Play', width/2, 925);
  
}
//used to test that the ending functionality works
function endPage(){
  fill('rgb(218,39,39)');
  //circle(500, 500, 500);
}

function drawEarths(){
  for(let x of earths){
    if(x.lowest>=100) x.drawEarth();
    else break;
  }
}

function setupExercise2(){
  earths.sort(function compareFn(a, b){
    if(a.lowest > b.lowest) return -1;
    else return 1;
  });
  zone.setShapeColor(0, 255, 100);
  zone.display();
  drawEarths();
  var top = new Shapes2(2, width, height/10, width/2, 0);
  top.setShapeColor(100, 0, 255);
  top.display();
  if(started == 1){
    var i = 0;
    while(i != earths.length){
      earths[i].updatePos();
      if(earths[i].highest>=height){
        earths.splice(i, 1);
        exercise2Count++;
        if(i == earths.length - 1) break;
      else continue;
      }
      i++;
    }
    for(let x of earths){
      //check collision
       if(x.inside(mouseX, mouseY)){
        //then increment lives or whatever you want to do when they fail 
        if(insideGlobe && !outsideGlobe) {
          exercise2count = 0;
          started = 0;
          exercise = 0;
          scene = 1;
          oneRun2 = true;
          insideGlobe = false;
          console.log(exercise2Hits);
        }
        }
        }
      }
  
}

function runOnceEx2(){
  zone = new Shapes2(2, width, height/4-difficulty*height/20, width/2, height);
  assembler();
}

function assembler(){
  for(var i = 0; i<30+difficulty*10; i++){
    let tempxCen = floor(random(0, width)) + 1;
    let tempyCen = floor(random(height*-5, height-height/4-difficulty*height/20)) + 1;
    let tempRadius = floor(random(difficulty*20, difficulty*25)) + 1;
    let tempEx2 = new Ex2(tempRadius, tempxCen, tempyCen);
    earths.push(tempEx2);
  }
}

class Shapes2{
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
      smallShape = new Shapes2(1, this.xLen*range, 0, this.xCen, this.yCen);
      largeShape = new Shapes2(1, this.xLen*(1/range), 0, this.xCen, this.yCen);
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
      smallShape = new Shapes2(2, this.xLen-2*temp, this.xLen-2*temp, this.xCen, this.yCen);
      largeShape = new Shapes2(2, this.xLen+2*temp, this.xLen+2*temp, this.xCen, this.yCen);
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

class Ex2{
  constructor(radius, xCen, yCen){
    this.radius = radius;
    this.xCen = xCen;
    this.yCen = yCen;
    this.lowest = yCen + radius;
    this.highest = yCen - radius;
    this.velocity = floor(random(3, 5)*difficulty);
  }
  drawEarth(){
    var x = this.xCen;
    var y = this.yCen;
    var r = this.radius;
    noStroke();
    fill('cyan');
    circle(x, y, r*2);
    fill('lime');
    triangle(x-r/4,y-7*r/8,x,y-7*r/8,x-r/4,y-r/2);
    triangle(x-7*r/8,y-r/2,x-r/4,y-r/4,x-r,y-r/8);
    triangle(x-r,y-r/8,x-r/4,y-r/4,x-3*r/4,y+r/8);
    triangle(x-3*r/4,y+r/8,x-r/4,y+r/2,x-3*r/8,y+r-8);
    triangle(x+3*r/4,y-sqrt(7)*r/4,x,y-r/4,x+r,y);
    triangle(x+r/2,y-r/8,x,y,x+3*r/8,y+3*r/4);
    triangle(x+5*r/8,y+r/2,x+7*r/8,y+r/2,x+5*r/8,y+3*r/4);
  }
  updatePos(){
    this.yCen += this.velocity;
    this.lowest = this.yCen + this.radius;
    this.highest = this.yCen - this.radius;
  }
  inside(px, py){
    return dist(px, py, this.xCen, this.yCen) <= this.radius;
  }
}