function draw() {
  background(220);
}
var freqA = 1000;
var freqS = 350;
var freqD = 700;
var freqF = 300;


var oscA, oscS, oscD, oscF;

var playing = false;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(200, 0, 255);
  textAlign(LEFT);

  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();

  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();

  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();

  oscF = new p5.Oscillator();
  oscF.amp(0);
  oscF.start();
	
	for (let i = 0; i < 150; i++) {
   let x=10+150*i;
		 drops[i] = new drop(x,200,20);
	 }
}

function draw() {
  if (playing) {
    //background(255, 0, 0);
    // } else {
    //  background(255, 0, 255);
    if (keyIsPressed) {
      stroke(mouseX, mouseY,random(255));
	  line(mouseX, mouseY, random(), random());
      oscA.freq(mouseX);
      oscS.freq(mouseY);
      oscD.freq(mouseX+50);
      oscF.freq(mouseY+50);
  
    }
  }
  text('Press A/S/D/F/\n Keys to Play', width / 2, 128);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  var audio = new Audio('sound.mp3');
  if (key == 'A') {
    audio.play();
    background(148, 0, 211);
  } else if (key == 'S') {
    osc = oscS;
    background(75, 0, 130);
  } else if (key == 'D') {
    osc = oscD;
    background(0, 0, 255);
  } else if (key == 'F') {
    osc = oscF;
    background(255, 255, 0);
  } 
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  var audio = new Audio('sound.mp3');
  if (key == 'A') {
      audio.pause();
    background(255, 255, 255);
  } else if (key == 'S') {
    osc = oscS;
    background(255, 255, 255);
  } else if (key == 'D') {
    osc = oscD;
    background(255, 255, 255);
  } else if (key == 'F') {
    osc = oscF;
    background(255, 255, 255);
  } 
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
let drops = [];

function draw() {
	background(mouseY-50,mouseY-150,mouseY+50);
for (let i=0;i<drops.length;i++){
	drops[i].show();
	drops[i].move();
}
	if (playing){
		      oscA.freq(mouseX);
					oscS.freq(mouseY);
	}
}
class drop{
	constructor(x,y,r){
		this.x = random(width);
		this.y = random(height);
		this.r= (30);
	}
	
	move(){
		this.x = this.x +random(-5,5);
		this.y = random(mouseX,2);
	}
	show(){
fill(0,30);
stroke(mouseX,mouseY,255);
		strokeWeight(4);
		ellipse(this.x,this.y, this.r*2);
	}
}