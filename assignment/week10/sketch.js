
var border = 15;  //MARGIN
var x1 = 0;
var y1 = 0;
var di = 2;
var i = 1;

//ADD THE VARIATION OF SHADE
var fiftyShadeOfGrey = random(0, 50);
var alph = random(80, 200);

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255);
 //DRAW THE FIRST POINT AT THE FIRST RANDOM POSITION
 di = random(5,15);
 x1 = random(border, width-border);
 y1 = random(border, height-border);
 fill(fiftyShadeOfGrey, fiftyShadeOfGrey, fiftyShadeOfGrey, alph);
 noStroke();
 ellipse(x1, y1, di, di); 
}


function draw() {
  // CREATE OTHER 5000 POINTS & CONNECTING LINE
  while ( i < 5000) {
    // CREATE A NEW RANDOM POSITION
    var x2 = random(border,width-border);
    var y2 = random(border,height-border);
    
    // DRAW THE LINE FROM AN OLD POSITION TO A NEW POSITION
    stroke(fiftyShadeOfGrey, fiftyShadeOfGrey, fiftyShadeOfGrey, alph);
    line (x1, y1, x2, y2); // DRAW
    
    // NOW X1 and Y1 REFER TO THE NEW POSITION
    x1 = x2;
    y1 = y2;

    
    // DRAW THE NEW POINT AT THE NEW POSITION
    di = random(5,15);
    fiftyShadeOfGrey = random(0,50);
    alph = random(80,200);
    fill(fiftyShadeOfGrey,fiftyShadeOfGrey,fiftyShadeOfGrey, alph);
    noStroke();
    ellipse(x1,y1,di,di); // DRAW
    
    // NEXT
    i++;

 }
} 