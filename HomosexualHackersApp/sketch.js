//global variables
//3 variables to calculate the accuracy in each exercise
var acc = 0;
var counter = 0;
var total = 0;
var highscoreTime1 = 99999;
var highscoreAcc1 = 0;
var highscoreEx3 = 0;
//variable for difficulty setting
var difficulty = 1;

//calculate accuracy
function accuracy(){
	if(total>0 && counter>0) return counter/total;
	else{
		counter = 0;
		total = 0;
		return 0;
	} 
}

var oneRun = true;
var oneRun2 = true;
var oneRun3 = true;

var exercise = 0;
var silom;

var scene = 0;
var soundOn = true;
var notifOn = true;
var setting1X = 865;

var mouseIsReleased = false;


function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER);
  textSize(20);
  silom = loadFont('Silom.ttf');
  textFont(silom);
  background(150, 120, 173);
  
  var lightPurple = color(150, 120, 173);
  var darkerPurple = color(67, 36, 87);
  var darkPurple = color(105, 56, 135);
  
  
}

function mouseReleased() {
  if(exercise == 1) setupExercise1();
  mouseIsReleased = true;
}

function draw() {
  
  var lightPurple = color(150, 120, 173);
  var darkerPurple = color(67, 36, 87);
  var darkPurple = color(105, 56, 135);
  
  switch(scene) {
    case 0:
      //HOMESCREEN
      background(150, 120, 173);
      
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 200);
      
      strokeWeight(0);
      fill(darkPurple);
      
      
      if (mouseX > 300 && mouseX < 700 && mouseY > 400 && mouseY < 600) {
        fill(darkerPurple);
        rect(300, 400, 400, 200, 20);
        
        if (mouseIsReleased) {
          scene = -3;  
        }
      } else {
        fill(darkPurple);
        rect(300, 400, 400, 200, 20);
      }
      
      if (mouseX > 400 && mouseX < 600 && mouseY > 650 && mouseY < 750) {
        fill(darkerPurple);
        rect(400, 650, 200, 100, 20);
        if (mouseIsReleased) {
          scene = -2;
        }
      } else {
        fill(darkPurple);
        rect(400, 650, 200, 100, 20);
      }
      

      //creating button text
      fill(220)
      textSize(55);
      text('Start', width/2, 520);
      textSize(25);
      text('Settings', width/2, 710);
      break;
      
    case -3:
      background(150, 120, 173);
      strokeWeight(0);
      
      fill(darkPurple);
      rect(0, 0, width, 100);
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 70);
      
      if (mouseX > 200 && mouseX < 800 && mouseY > 200 && mouseY < 400) {
        fill(darkerPurple);
        rect(200, 200, 600, 200, 20);
        if (mouseIsReleased) {
          scene = -1;
        }
      } else {
        fill(darkPurple);
        rect(200, 200, 600, 200, 20);
      }
      fill(220)
      textSize(55);
      text('Image Tracing', width/2, 320);
      
      
      if (mouseX > 200 && mouseX < 800 && mouseY > 450 && mouseY < 650) {
        fill(darkerPurple);
        rect(200, 450, 600, 200, 20);
        if (mouseIsReleased) {
          scene = -7;
        }
      } else {
        fill(darkPurple);
        rect(200, 450, 600, 200, 20);
      }
      fill(220)
      textSize(55);
      text('Dodger', width/2, 570);
      
      
      if (mouseX > 200 && mouseX < 800 && mouseY > 700 && mouseY < 900) {
        fill(darkerPurple);
        rect(200, 700, 600, 200, 20);
        if (mouseIsReleased) {
          scene = -6;
          g3Playing = true;
        }
      } else {
        fill(darkPurple);
        rect(200, 700, 600, 200, 20);
      }
      //creating button text
      fill(220);
      textSize(55);
      text('Shape Clicker', width/2, 820);
      
      if (mouseX < 48 || mouseX > 92 || mouseY < 38 || mouseY > 65) {
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
      } else {
        fill(lightPurple);
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
        if (mouseIsReleased) {
          scene = 0;
        }
      }
      
      if (mouseX < 895 || mouseX > 955 || mouseY < 15 || mouseY > 85) {
        stroke(255);
        strokeWeight(5);
        fill(255);
      } else {
        stroke(lightPurple);
        strokeWeight(5);
        fill(lightPurple);
        if (mouseIsReleased) {
        scene = -5;
        }
      }
      
      line(900, 50, 915, 35);
      line(915, 35, 920, 45);
      line(920, 45, 945, 20);
      
      rect(900, 65, 5, 15);
      rect(915, 55, 5, 25);
      rect(930, 50, 5, 30);
      rect(945, 35, 5, 45);
      triangle(947, 22, 943, 18, 950, 15);
      
      break;
      
    case -2:
      background(150, 120, 173);
      strokeWeight(0);
      
      fill(darkPurple);
      rect(0, 0, width, 100);
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 70);
      
      
      fill(darkPurple);
      rect(50, 200, width-100, 100, 20);
      fill(lightPurple);
      rect(750, 215, 150, 70, 45);
      
      distFromSetting1 = dist(785, 250, mouseX, mouseY);
      distFromSetting2 = dist(865, 250, mouseX, mouseY);
      
      if (distFromSetting1 < 30 || distFromSetting2 < 30) {
        if (mouseIsReleased) {
          soundOn = !soundOn;
        }
      }
      
      fill(darkPurple);
      circle(soundOn ? 865 : 785, 250, 60);
      
      fill(220)
      textSize(55);
      text('Sound', 200, 270);
      
      fill(darkPurple);
      rect(50, 325, width-100, 100, 20);
      fill(lightPurple);
      rect(750, 340, 150, 70, 45);
      distFromSetting3 = dist(785, 375, mouseX, mouseY);
      distFromSetting4 = dist(865, 375, mouseX, mouseY);
      fill(darkPurple);
      circle(notifOn ? 865 : 785, 375, 60);
      if (distFromSetting3 < 30 || distFromSetting4 < 30) {
        if (mouseIsReleased) {
          notifOn = !notifOn;
        }
      }
      fill(220)
      textSize(55);
      text('Notifications', 310, 395);
      
      fill(darkPurple);
      rect(50, 450, width-100, 100, 20);
      fill(lightPurple);
      rect(700, 465, 200, 70, 45);
      distFromSetting5 = dist(735, 500, mouseX, mouseY);
      distFromSetting6 = dist(800, 500, mouseX, mouseY);
      distFromSetting7 = dist(865, 500, mouseX, mouseY);
      fill(132, 101, 156);
      circle(735, 500, 60);
      circle(800, 500, 60);
      circle(865, 500, 60);
      fill(lightPurple);
      text('1', 735, 520);
      text('2', 800, 520);
      text('3', 865, 520);
      
      if (distFromSetting5 < 30) {
        if (mouseIsReleased) {
          difficulty = 1;
        }
      } else if (distFromSetting6 < 30) {
        if (mouseIsReleased) {
          difficulty = 2;
        }
      } else if (distFromSetting7 < 30) {
        if (mouseIsReleased) {
          difficulty = 3;
        }
      }
      
      switch(difficulty) {
        case 1:
          fill(darkPurple);
          circle(735, 500, 60);
          fill("white");
          text('1', 735, 520);
          break;
        case 2:
          fill(darkPurple);
          circle(800, 500, 60);
          fill("white");
          text('2', 800, 520);
          break;
        case 3:
          fill(darkPurple);
          circle(865, 500, 60);
          fill("white");
          text('3', 865, 520);
      }
      
      fill(220)
      textSize(55);
      text('Difficulty', 260, 520);
      
      if (mouseX < 48 || mouseX > 92 || mouseY < 38 || mouseY > 65) {
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
      } else {
        fill(lightPurple);
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
        if (mouseIsReleased) {
          scene = 0;
        }
      }
      break;
      
    case 1:
      background(150, 120, 173);
      strokeWeight(0);
      
      fill(darkPurple);
      rect(0, 0, width, 100);
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 70);
      
      if (mouseX < 48 || mouseX > 92 || mouseY < 38 || mouseY > 65) {
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
      } else {
        fill(lightPurple);
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
        if (mouseIsReleased) {
          scene = -3;
        }
      }
      
      textSize(65);
      fill(220);
      text('Game Over!', width/2, 500);
      break;
      
    case -1:
      exercise = 1;
      
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
          scene = -3;
          exercise = 0;
          counter = 0;
          total = 0;
          acc = 0;
          shape = 0;
          timerRun = false;
          oneRun = true;
          timer = 0;
        }
      }
      
      break;
      
    case -4:
      background(150, 120, 173);
      strokeWeight(0);
      
      fill(darkPurple);
      rect(0, 0, width, 100);
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 70);
      
      if (mouseX < 48 || mouseX > 92 || mouseY < 38 || mouseY > 65) {
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
      } else {
        fill(lightPurple);
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
        if (mouseIsReleased) {
          scene = -3;
          timer = 0;
        }
      }
      
      fill(darkPurple);
      rect(width/2 - 400, height/2 - 150, 800, 350)
      
      textFont(silom);
      fill(255);
      textSize(55);
      text("Time: ", width/2 - 250, 450);
      text("Accuracy: ", width/2 - 180, 650);
      
      acc = accuracy() * 100;
      text(timer.toFixed(1) + " seconds", width/2 + 200, 450);
      text(acc.toFixed(2) + "%", width/2 + 200, 650);
      
      if (acc.toFixed(2) >= highscoreAcc1) {
        highscoreAcc1 = acc.toFixed(2);
      }
      
      if (timer.toFixed(1) <= highscoreTime1 && timer.toFixed(1) != 0) {
        highscoreTime1 = timer.toFixed(1);
      }
      
      stroke(255);
      strokeWeight(10);
    
      break;

    case -5:
      background(150, 120, 173);
      strokeWeight(0);
      
      fill(darkPurple);
      rect(0, 0, width, 100);
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 70);
      
      if (mouseX < 48 || mouseX > 92 || mouseY < 38 || mouseY > 65) {
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
      } else {
        fill(lightPurple);
        textFont('Calibri');
        text('←', 70, 70);
        textFont(silom);
        if (mouseIsReleased) {
          scene = -3;
        }
      }
      
      if (acc >= highscoreAcc1*100) {
        highscoreAcc1 = acc.toFixed(2);
      }
      
      if (timer.toFixed(1) <= highscoreTime1 && timer.toFixed(1) != 0) {
        highscoreTime1 = timer.toFixed(1);
      }
      
      
      
      
      textSize(65);
      fill(220);
      
      fill(darkPurple);
      rect(width/2 - 400, height/2 - 370, 800, 350);
      rect(width/2 - 400, height/2, 800, 350);
      
      textFont(silom);
      fill(255);
      textSize(55);
      text("Image Tracing Highscore", width/2, 200);
      if (highscoreTime1 == 99999) {
        text("0 seconds", width/2, 325);
      } else {
        text(highscoreTime1 + " seconds", width/2, 325);
      }
      text(highscoreAcc1 + "% accuracy", width/2, 400);
      
      text("Shape Clicker Highscore", width/2, 575);
      text(highscoreEx3 + " shapes", width/2, 725);
      
      stroke(255);
      strokeWeight(10);
      
    
      break;
      
    case -6:

      exercise = 3;

      background(lightPurple);
      fill(darkPurple);
      rect(0, 0, width, 100);
      fill(220)
      textSize(55);
      text('MotoSkill©', width/2, 70);
      textSize(35);
      text('Click as many shapes as possible!', width/2, 850);
      
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
          exercise = 0;
          timer3 = 10;
          gameScore = 0;
          scene = -3;
          oneRun3 = true;
        }
      }
      break;
      
    case -7:
      exercise = 2;

      background(lightPurple);
      break;
      
      
      
  }
  
  fill(0);
  strokeWeight(0);
  
  
  if(exercise == 1){
    
    while (oneRun) {
      background(150, 120, 173);
      oneRun = false;
    }
  	exercise1();
  } else if (exercise == 3) {
  	exercise3();
  } else if (exercise == 2) {
    exercise2();
  }
  
  mouseIsReleased = false;
}

//Classes
class Checkpoint{
  //initialize variables
  constructor(x, y, radius, final){
    this.x = x;
    this.y = y;
    this.radius = radius/2;
    this.hit = 0;
    this.drawn = 0;
    this.final = final;
  }
  //function to display the Checkpoint if needed
  display(){
    if(this.final == 1) {
      fill('purple');
      if (this.hit) {
        scene = -4;
        exercise = 0;
        shape = null;
        oneRun = true;
      }
    }
    else if(this.hit == 0) fill('lime');
    else fill('red');
    circle(this.x, this.y, this.radius*2);
  }
  //see if an inputted point is inside of this checkpoint
  inside(px, py){
    return dist(px, py, this.x, this.y) <= this.radius ? true : false;
  }
}

