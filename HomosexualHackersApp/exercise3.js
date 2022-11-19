//SETTING GAME timer3
let timer3;
var gameScore = 0;
//DEFINING SHAPES PT.1
//CIRCLE
var circles;
var numCircles;
var ptx;
var pty;
var xspeed;
var yspeed;

//TRIANGLE
var triangles;
var numTriangles;
var ptxT;
var ptyT;
var xspeedT;
var yspeedT;

//TRIANGLE1
var triangles1;
var numTriangles1;
var ptxT1;
var ptyT1;
var xspeedT1;
var yspeedT1;

//ELLIPSE
var ellipses;
var numEllipses;
var ptxE;
var ptyE;
var xspeedE;
var yspeedE;

//ELLIPSE1
var ellipses1;
var numEllipses1;
var ptxE1;
var ptyE1;
var xspeedE1;
var yspeedE1;

//CIRCLE1
var circles1;
var numCircles1;
var ptx1;
var pty1;
var xspeed1;
var yspeed1;

//CIRCLE2
var circles2;
var numCircles2;
var ptx2;
var pty2;
var xspeed2;
var yspeed2;

var offset1;
var offset2;


//DRAWING THE REQUIRED SHAPES(INCLUDES MOVEMENT AND COLORS)
function exercise3() {
  
  while (oneRun3) {

  timer3 = 10;
  //gameScore = 0;
  //DEFINING SHAPES PT.1
  //CIRCLE
  circles = [];
  numCircles = 2;
  ptx = 300;
  pty = 300;
  xspeed = -0.5;
  yspeed = -0.5;

  //TRIANGLE
  triangles = [];
  numTriangles = 2;
  ptxT = 100;
  ptyT = 300;
  xspeedT = 0.5;
  yspeedT = 0.5;

  //TRIANGLE1
  triangles1 = [];
  numTriangles1 = 2;
  ptxT1 = 300;
  ptyT1 = 100;
  xspeedT1 = 0.5;
  yspeedT1 = 0.5;

  //ELLIPSE
  ellipses = [];
  numEllipses = 2;
  ptxE = 0;
  ptyE = 0;
  xspeedE = 0.5;
  yspeedE = -0.5;

  //ELLIPSE1
  ellipses1 = [];
  numEllipses1 = 2;
  ptxE1 = 310;
  ptyE1 = 200;
  xspeedE1 = 0.5;
  yspeedE1 = 0.5;

  //CIRCLE1
  circles1 = [];
  numCircles1 = 2;
  ptx1 = 300;
  pty1 = 300;
  xspeed1 = -0.5;
  yspeed1 = 0.5;

  //CIRCLE2
  circles2 = [];
  numCircles2 = 2;
  ptx2 = 100;
  pty2 = 100;
  xspeed2 = -0.5;
  yspeed2 = 0.5;

  offset1 = 150;
  offset2 = 150;
//CREATING SHAPES AT COORDINATES ON CANVAS
  //createCanvas(600,600);
  //CIRCLE

  for (let i = 0; i < numCircles; ++i) {
    circles[i] = new Circle(ptx,pty);
    ptx += 200;
    pty += 100;
  }
  
  //TRIANGLE
  for (let j = 0; j < numTriangles; ++j) {
    triangles[j] = new Triangle(ptxT,ptyT);
    ptxT += 0;
    ptyT += 0;
  }
  
  //TRIANGLE1
  for (let a = 0; a < numTriangles1; ++a) {
    triangles1[a] = new Triangle1(ptxT1,ptyT1);
    ptxT1 += 0;
    ptyT1 += 0;
  }
  
  //ELLIPSE
  for (let k = 0; k < numEllipses; ++k) {
    ellipses[k] = new Ellipse(ptxE,ptyE);
    ptxE += 200;
    ptyE += 100;
  }
  //ELLIPSE1
  for (let c = 0; c < numEllipses1; ++c) {
    ellipses1[c] = new Ellipse1(ptxE1,ptyE1);
    ptxE1 += 200;
    ptyE1 += 100;
  }
  
  //CIRCLE1
  for (let l = 0; l < numCircles1; ++l) {
    circles1[l] = new Circle1(ptx1,pty1);
    ptx1 += 0;
    pty1 += 100;
}
  //CIRCLE2
  for (let b = 0; b < numCircles2; ++b) {
    circles2[b] = new Circle2(ptx2,pty2);
    ptx2 += 0;
    pty2 += 100;
  }
  oneRun3 = false;
}
  
  
  push();
  translate(offset1, offset2);
  //background(204,204,255);
  //CIRCLE
  for (let i = 0; i < circles.length; ++i) {
    circles[i].move();
    circles[i].display();
  }
  //TRIANGLE
  for (let j = 0; j < triangles.length; ++j) {
    triangles[j].move();
    triangles[j].display();
  }
  
  //TRIAGLE1
  for (let a = 0; a < triangles1.length; ++a) {
    triangles1[a].move();
    triangles1[a].display();
  }
  
  //ELLIPSE
  for (let k = 0; k < ellipses.length; ++k) {
    ellipses[k].move();
    ellipses[k].display();
  }
  
  //ELLIPSE1
  for (let c = 0; c < ellipses1.length; ++c) {
    ellipses1[c].move();
    ellipses1[c].display();
  }
  
  //CIRCLE1
  for (let l = 0; l < circles1.length; ++l) {
    circles1[l].move();
    circles1[l].display();
  }
   //CIRCLE2
  for (let b = 0; b < circles2.length; ++b) {
    circles2[b].move();
    circles2[b].display();
  }
  
  //SCORE
  textAlign(RIGHT, TOP);
  stroke(204,153,255);
  fill(255,255,255);
  textSize(50);
  text(timer3, 700, 0);
  if (frameCount % 60 == 0 && timer3 > 0) {
    timer3 --;
  }
  if (timer3 == 0) {
    stroke(204,153,255);
    fill(255,255,255);
    text("GAME OVER", width/2, 300);
    stroke(204,153,255);
    fill(255,255,255);
    textSize(32);
    stroke(204,153,255);
    fill(255,255,255);
    text("Game Score :   ", width/2 - 20, 400);
    textSize(32);
    stroke(204,153,255);
    fill(255,255,255);
    text(gameScore/2, width/2, 400);
    if (gameScore/2 > highscoreEx3) {
        highscoreEx3 = gameScore/2;
      }
  }
  pop();

}


//CLICKING ON SHAPES DELETES THEM FROM THE ARRAY
function mousePressed() {
  //CIRCLE
  if (circles == null) {return;} else {
  for (let i = circles.length - 1; i >= 0; --i) {
    if (circles[i].mouseOver(mouseX - offset1, mouseY - offset2)) {
      circles.splice(i,1);
      gameScore += 1;
    }
  }
  }
  //TRIANGLE
  for (let j = triangles.length - 1; j >= 0; --j) {
    if (triangles[j].mouseOver(mouseX - offset1, mouseY - offset2)) {
      triangles.splice(j,1);
      gameScore += 1;
    }
  }
  
  //TRIANGLE1
  for (let a = triangles1.length - 1; a >= 0; --a) {
    if (triangles1[a].mouseOver(mouseX - offset1, mouseY - offset2)) {
      triangles1.splice(a,1);
      gameScore += 1;
    }
  }
  
  //ELLIPSE
  for (let k = ellipses.length - 1; k >= 0; --k) {
    if (ellipses[k].mouseOver(mouseX - offset1, mouseY - offset2)) {
      ellipses.splice(k,1);
      gameScore += 1;
    }
  }
  
  //ELLIPSE1
  for (let c = ellipses1.length - 1; c >= 0; --c) {
    if (ellipses1[c].mouseOver(mouseX - offset1, mouseY - offset2)) {
      ellipses1.splice(c,1);
      gameScore += 1;
    }
  }
  
  //CIRCLE1
  for (let l = circles1.length - 1; l >= 0; --l) {
    if (circles1[l].mouseOver(mouseX - offset1, mouseY - offset2)) {
      circles1.splice(l,1);
      gameScore += 1;
    }
  }
  //CIRCLE2
  for (let b = circles2.length - 1; b >= 0; --b) {
    if (circles2[b].mouseOver(mouseX - offset1, mouseY - offset2)) {
      circles2.splice(b,1);
      gameScore += 1;
    }
  }
}

function offset() {
  mouseX -= offset1;
  mouseY -= offset2;
}

function deOffset() {
  mouseX += offset1;
  mouseY += offset2;
}

//DEFINING SHAPES PT.2
//CIRCLE
function Circle(ptx,pty) {
  xcoor = ptx;
  ycoor = pty;
  rad = 25;
  //CHECKS IF THE CURSOR IS ON THE SHAPE
  this.mouseOver = function
(x, y) {
    if (timer3 === 0)
    {
      return false;  //INDIRECTLY STOPS GAMME BY DISABLING MOUSEOVER FUNCTION
    }
    else {
    return dist(xcoor,ycoor,x,y) < rad;
    }
  }
  //MAKES SURE SHAPES ARE IN THE CANVAS
  this.move = function() {
    if (xcoor < 25 || xcoor > 575) {
      xspeed *= -1;
        
        }
    if (ycoor < 25 || ycoor > 575) {
      yspeed *= -1;
    }
    xcoor += xspeed;
    ycoor += yspeed;
  }
  
  //COLORS OF SHAPES
  this.display = function() {
    if (this.mouseOver(mouseX - offset1, mouseY - offset2)) {
      this.col = color(255,255,255);
    }
    else {
      this.col = color(178,102,255);
    }
    stroke(102,0,204);
    strokeWeight(5);
    fill(this.col);
    ellipse(xcoor,ycoor,rad*2,rad*2);
  }
}

//TRIANGLE
function Triangle(ptxT,ptyT) {
  x1 = ptxT;
  y1 = ptyT;
  x2 = x1 + 100;
  y2 = y1 + 24;
  x3 = x1 + 23;
  y3 = y1 + 100;
  
  this.mouseOver = function(x, y) {
    if (timer3 === 0)
    {
      return false;
    }
    else {
    var s = (x1 - x3) * (y - y3) - (y1 - y3) * (x - x3);
    var t = (x2 - x1) * (y- y1) - (y2 - y1) * (x - x1);

    if ((s < 0) != (t < 0) && s != 0 && t != 0)
        return false;

    var d = (x3 - x2) * (y - y2) - (y3 - y2) * (x - x2);
    return d == 0 || (d < 0) == (s + t <= 0);
    }
  }
  this.move = function() {
    if (x1 < 5 || x1 > 595) 
    {xspeedT *= -1;}
    if (y1 < 5 || y1 > 595) 
    {yspeedT *= -1;}
    x1 += xspeedT;
    y1 += yspeedT;
    
    if (x2 < 5 || x2 > 595) 
    {xspeedT *= -1;}
    if (y2 < 5 || y2 > 595) 
    {yspeedT *= -1;}
    x2 += xspeedT;
    y2 += yspeedT;
    
    if (x3 < 5 || x3 > 595) 
    {xspeedT *= -1;}
    if (y3 < 5 || y3 > 595) 
    {yspeedT *= -1;}
    x3 += xspeedT;
    y3 += yspeedT;
  }
  this.display = function() {
    if (this.mouseOver(mouseX - offset1, mouseY - offset2)) {
      this.col = color(255,255,255);
    }
    else {
      this.col = color(255,178,102);
    }
    stroke(204,102,0);
    strokeWeight(5);
    fill(this.col);
    triangle(x1,y1,x1 + 100,y1 + 24,x1 + 23,y1 + 100);
  }
}

//TRIANGLE1
function Triangle1(ptxT1,ptyT1) {
  x11 = ptxT1;
  y11 = ptyT1;
  x21 = x11 + 50;
  y21 = y11 + 24;
  x31 = x11 + 23;
  y31 = y11 + 100;
  
  this.mouseOver = function(x, y) {
    if (timer3 === 0)
    {
      return false;
    }
    else {
      var s1 = (x11 - x31) * (y - y31) - (y11 - y31) * (x - x31);
      var t1 = (x21 - x11) * (y- y11) - (y21 - y11) * (x - x11);

      if ((s1 < 0) != (t1 < 0) && s1 != 0 && t1 != 0)
          return false;

      var d1 = (x31 - x21) * (y - y21) - (y31 - y21) * (x - x21);
      return d1 == 0 || (d1 < 0) == (s1 + t1 <= 0);
    }
  }
  this.move = function() {
    if (x11 < 5 || x11 > 595) 
    {xspeedT1 *= -1;}
    if (y11 < 5 || y11 > 595) 
    {yspeedT1 *= -1;}
    x11 += xspeedT1;
    y11 += yspeedT1;
    
    if (x21 < 5 || x21 > 595) 
    {xspeedT1 *= -1;}
    if (y21 < 5 || y21 > 595) 
    {yspeedT1 *= -1;}
    x21 += xspeedT1;
    y21 += yspeedT1;
    
    if (x31 < 5 || x31 > 595) 
    {xspeedT1 *= -1;}
    if (y31 < 5 || y31 > 595) 
    {yspeedT1 *= -1;}
    x31 += xspeedT1;
    y31 += yspeedT1;
  }
  this.display = function() {
    if (this.mouseOver(mouseX - offset1, mouseY - offset2)) {
      this.col = color(255,255,255);
    }
    else {
      this.col = color(255,255,102);
    }
    stroke(204,204,0);
    strokeWeight(5);
    fill(this.col);
    triangle(x11,y11,x11 + 50,y11 + 24,x11 + 23,y11 + 100);
  }
}

//ELLIPSE
function Ellipse(ptxE,ptyE) {
  xcoorE = ptxE;
  ycoorE = ptyE;
  radE = 25;
  this.mouseOver = function(x, y) {
    if (timer3 === 0)
    {
      return false;
    }
    else {
    return (sq(mouseX - offset1-xcoorE)/sq((radE*7)/2) + (sq(mouseY - offset2-ycoorE)/sq((radE*4)/2))) <= 1;
    }
  }
  this.move = function() {
    if (xcoorE < 85 || xcoorE > 515) {
      xspeedE *= -1;
        
        }
    if (ycoorE < 50 || ycoorE > 550) {
      yspeedE *= -1;
    }
    xcoorE += xspeedE;
    ycoorE += yspeedE;
  }
  this.display = function() {
    if (this.mouseOver(mouseX - offset1, mouseY - offset2)) {
      this.col = color(255);
    }
    else {
      this.col = color(255,102,102);
    }
    stroke(204,0,0);
    strokeWeight(5);
    fill(this.col);
    ellipse(xcoorE,ycoorE,radE*7,radE*4);
  }
}

//ELLIPSE1
function Ellipse1(ptxE1,ptyE1) {
  xcoorE1 = ptxE1;
  ycoorE1 = ptyE1;
  radE1 = 25;
  this.mouseOver = function(x, y) {
    if (timer3 === 0)
    {
      return false;
    }
    else {
    return (sq(x - xcoorE1)/sq((radE1*5)/2) + (sq(y-ycoorE1)/sq((radE1*7)/2))) <= 1;
    }
  }
  this.move = function() {
    if (xcoorE1 < 60 || xcoorE1 > 540) {
      xspeedE1 *= -1;
        
        }
    if (ycoorE1 < 85 || ycoorE1 > 515) {
      yspeedE1 *= -1;
    }
    xcoorE1 += xspeedE1;
    ycoorE1 += yspeedE1;
  }
  this.display = function() {
    if (this.mouseOver(mouseX - offset1, mouseY - offset2)) {
      this.col = color(255,255,255);
    }
    else {
      this.col = color(102,255,102);
    }
    stroke(0,204,0);
    strokeWeight(5);
    fill(this.col);
    ellipse(xcoorE1,ycoorE1,radE1*5,radE1*7);
  }
}
  
//CIRCLE1
  function Circle1(ptx1,pty1) {
  xcoor1 = ptx1;
  ycoor1 = pty1;
  rad1 = 25;
  this.mouseOver = function
(x, y) {
    if (timer3 === 0)
    {
      return false;
    }
    else {
    return dist(xcoor1,ycoor1,x,y) < rad1*1.5;
    }
  }
  this.move = function() {
    if (xcoor1 < 35 || xcoor1 > 565) {
      xspeed1 *= -1;
        
        }
    if (ycoor1 < 35 || ycoor1 > 565) {
      yspeed1 *= -1;
    }
    xcoor1 += xspeed1;
    ycoor1 += yspeed1;
  }
  this.display = function() {
    if (this.mouseOver(mouseX - offset1, mouseY - offset2)) {
      this.col = color(255,255,255);
    }
    else {
      this.col = color(102,255,255);
    }
    stroke(0,204,204);
    strokeWeight(5);
    fill(this.col);
    ellipse(xcoor1,ycoor1,rad1*3,rad1*3);
  }
}

//CIRCLE2
function Circle2(ptx2,pty2) {
  xcoor2 = ptx2;
  ycoor2 = pty2;
  rad2 = 25;
  this.mouseOver = function(x, y) {
    if (timer3 === 0)
    {
      return false;
    }
    else {
    return dist(xcoor2,ycoor2,x,y) < rad2*2;
    }
  }
  this.timer3iszero = function() {
    if (timer3 === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  this.move = function() {
    if (xcoor2 < 51 || xcoor2 > 549) {
      xspeed2 *= -1;
        
        }
    if (ycoor2 < 51 || ycoor2 > 549) {
      yspeed2 *= -1;
    }
    xcoor2 += xspeed2;
    ycoor2 += yspeed2;
  }
  this.display = function() {
    if (this.mouseOver(mouseX - offset1, mouseY - offset2)) {
      this.col = color(255,255,255);
    }
    else {
      this.col = color(102,178,255);
    }
    stroke(0,102,204);
    strokeWeight(5);
    fill(this.col);
    ellipse(xcoor2,ycoor2,rad2*4,rad2*4);
  }
  this.stopthegame = function() {
    if (timer3iszero) {
      display.stop();
    }
  }
}



