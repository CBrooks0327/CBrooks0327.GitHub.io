var Diameter = 20;
var changing, Yloc;

var step = 20;
var newSz;

function setup() {
  createCanvas(600, 600);
  // colorMode(237, 23, 201)
  //background(23, 190, 237);
  frameRate(20); 
  changing =0;
  Yloc =height/2;
}

function draw() {
  background(23, 190, 237);
  
  fill(237,23,187)
  ellipse(changing,changing, 20, 20);
  
  fill (237,32,21)
  ellipse(changing,300, 20, 20); 
  
  fill (237,136,21)
  ellipse(300,changing, 20, 20); 
  
  fill (226,237,21)
  ellipse(height-changing,changing, 20, 20);
  
  fill (21,237,39)
  ellipse(width-changing,width-changing, 20, 20);
  
  fill(0,0,0)
  ellipse(height-Yloc,height-Yloc, 20, 20);  
 
  fill (168,21,237)
 ellipse (width-changing,Yloc,20,20) 
 
 fill (225,225,225)
 ellipse (changing,height-changing,20,20)

 fill (21,78,237)
 ellipse (300,height-changing,20,20)

  
  //1.  change the changing with each draw
 // changing = changing+20;
  
  //2. control speed
 // changing = changing+step;
  
  //3.  How do we turn around?
 // if (changing > width) {
//    step = -1*step;
 // }
 // changing = changing+step;*/
  
   //4.  How about bounce
  if ((changing > width) || (changing < 0)){
     step = -1*step;
   }
   changing = changing+step;  
   
   
   
   
   
   
   //Can you make two other circles that changes along the diagonals?
  
}