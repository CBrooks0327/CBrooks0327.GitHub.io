var Flag =0;

   function setup() {
  createCanvas(710, 200);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0,255,0);
  
  
  createCanvas(500, 500);
  
  // button = createButton('(im)Press Me');
  // button.position(0, 0);
  // button.size(20,20);
  // button.mouseOver(changeColOver);
  // button.mouseOut(changeColOut);
  // button.mousePressed(ChangeVariable);
  
  // var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  // button.style("background-color",col);
  
}

function draw() {
  background(19,247,243)
  
fill(226,237,21)
ellipse (height,0,150,150)
  
  if (Flag === 0) {
    fill(237,23,187);
  
  //  noStroke ()
  //  for (var = i = 0; i < 10; i ++) {
  //  ellipse(150,50,80,80)
  //  rotate(PI/5) }
  // else 
//  fill(10,200,200);
 // rect(225, 125, 80,80);
 //     fill(200,200,125)
  
stroke(0,255,0)
  strokeWeight(3)
  line(200,200, 200, 600)

  translate(200, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
 
 translate(-200, -200);
 
 stroke(0,255,0)
  strokeWeight(3)
  line(300,300, 200, 600)
 
  
  translate(300,300);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  translate(-300, -300);

  stroke(0,255,0)
  strokeWeight (3)
  line(400,400,400,600)
  
    stroke(0,255,0)
  strokeWeight (3)
  line(100,100,100,600) 

  
  translate(100, 100);
  noStroke();
  
 for (var i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 80);
   rotate(PI/5);
 }
  translate(-100, -100);
 
   
translate(400, 400);
  noStroke();
 for (var i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 80);
   rotate(PI/5);
   

 }
  translate(-400, -400);
    
  }
  
  noStroke();
 fill (255,255,255) 
  ellipse(360,60, 30, 30);

  fill(255, 255,255)
  ellipse(380,60,30,30)
  
  fill(255,255,255)
  ellipse(400,60,30,30)
  
  
  fill(255,255,255)
  ellipse(180,60,30,30)
  
  fill(255,255,255)
  ellipse(200,60,30,30)
  
  fill(255,255,255)
ellipse(220,60,30,30)

  
}

function changeColOver() {
  var col = color(1,1,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
}

function changeColOut() {
  var col = color(100,100,200,128);    //  2 buttons are Dom elements--changing button color is doable but "involved"
  button.style("background-color",col);
}

function mousePressed() {
  
  distX = width - mouseX
  distY = mouseY
  
  distance = sqrt((distX ^ 2) + (distY ^ 2))
  
  // console.log(distance)
  
  if (Flag == 0) {
    Flag = 1;
  } else {
    Flag = 0;
  }
}

function ChangeVariable() {
  console.log("The Flag Variable = "+Flag)
}


var song;

function preload() {
  song = loadSound('assets/bird-whistling-a.wav');
}



function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}

//function setup() {
  //createCanvas(710,200);//Play with 
 // background(228,232,30);
 // fill(0,0,0);
  //strokeWeight(4)
 


