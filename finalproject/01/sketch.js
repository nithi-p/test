/*
  The detectBeat() function decides whether we have a beat or not
  based on amplitude level and Beat Detect Variables.
 */
var soundFile;
var amplitude;
var particles = [];
var backgroundColor = 0;
var beatColor;
var myWidth;
var myHeight;

/* 
 Beat Detect Variables
*/
// how many draw loop frames before the beatCutoff starts to decay
// so that another beat can be triggered.
// frameRate() is usually around 60 frames per second,
// so 20 fps = 3 beats per second, meaning if the song is over 180 BPM,
// we wont respond to every beat.
var beatHoldFrames = 20;

// what amplitude level can trigger a beat?
var beatThreshold = 0.11; 

// When we have a beat, beatCutoff will be reset to 1.1*beatThreshold, and then decay
// Level must be greater than beatThreshold and beatCutoff before the next beat can trigger.
var beatCutoff = 0;
var beatDecayRate = 0.95; // how fast does beat cutoff decay?
var framesSinceLastbeat = 0; // once this equals beatHoldFrames, beatCutoff starts to decay.

var videoInput;



function preload() {
  soundFile = loadSound('music.mp3');
}

function setup() {



myWidth = 600;
myHeight = 450;


  c = createCanvas(myWidth, myHeight);
  noStroke();

  amplitude = new p5.Amplitude();
  soundFile.play();


  



// dkjfslkafjdskl;fajskdlfjaklsd;jlka;jdkl;asjfklsdjfakl;


  // setup camera capture
        videoInput = createCapture(VIDEO);
        videoInput.size(myWidth, myHeight);
        videoInput.position((windowWidth/2)-(myWidth/2), (windowHeight/2)-(myHeight/2));
        //videoInput.hide();
        //fill(0);

        
        // setup canvas
        var cnv = createCanvas(myWidth, myHeight);
        cnv.position((windowWidth/2)-(myWidth/2), (windowHeight/2)-(myHeight/2));

        // setup tracker
        ctracker = new clm.tracker();
        ctracker.init(pModel);
        ctracker.start(videoInput.elt);

        noStroke();


//fjkdslfjasdlk;fjaklsdfjklasdfjksladjfklsadjfkl;asdjfkl;ajsdflks;a



  // make a single particle.
  //particles.push( new Particle() );


}

function draw() {


  var level = amplitude.getLevel();
  detectBeat(level);

  // for (var i = 0; i < particles.length; i++) {
  //   particles[i].update(level);
  //   particles[i].draw();
  // }



//fjkdsljfakl;sjfksl;afjls;afjls;kdfjksa;lfjlka;sdjfkals;
  clear();
  fill(backgroundColor);
  rect(0,0,windowWidth,windowHeight);

        // get array of face marker positions [x, y] format
        var positions = ctracker.getCurrentPosition();
        
        for (var i=0; i<positions.length; i++) {

          // set the color of the ellipse based on position on screen
          fill(map(positions[i][0], myWidth*0.33, myWidth*0.66, 0, 255), map(positions[i][1], myHeight*0.33, myHeight*0.66, 0, 255), 255,100);
          // draw ellipse at each position point
          noStroke();
          ellipse(positions[i][0], positions[i][1], level*10, level*10);

          // draw Eye Balls
          ellipse(positions[27][0], positions[27][1], 5, 5);
          ellipse(positions[32][0], positions[32][1], 5, 5);

          // lines to eyes
          stroke(255,random(255),255,15);
          

          line(positions[i][0], positions[i][1], positions[27][0], positions[27][1]);
          line(positions[i][0], positions[i][1], positions[32][0], positions[32][1]);


          if (i === 54){
          line(positions[i][0], positions[i][1], positions[6][0], positions[6][1]);
          }
          if (i === 52){
          line(positions[i][0], positions[i][1], positions[8][0], positions[8][1]);
          }
     


















          stroke(map(positions[i][0], myWidth*0.33, myWidth*0.66, 0, 255), map(positions[i][1], myHeight*0.33, myHeight*0.66, 0, 255), 255,3);
          noFill();
          ellipse(positions[27][0], positions[27][1], 15,15);
          ellipse(positions[32][0], positions[32][1], 15,15);

          fill(beatColor);

          ellipse(positions[27][0], positions[27][1], level*200,level*200);
          ellipse(positions[32][0], positions[32][1], level*200,level*200);


          // draw Nose
          stroke(random(255),random(255),255,1);
          line(positions[33][0], positions[33][1], positions[41][0], positions[41][1]);
          line(positions[41][0], positions[41][1], positions[62][0], positions[62][1]);

                    beginShape();
                    vertex(positions[34][0], positions[34][1]);
                    vertex(positions[35][0], positions[35][1]);
                    vertex(positions[36][0], positions[36][1]);
                    vertex(positions[42][0], positions[42][1]);
                    vertex(positions[37][0], positions[37][1]);
                    vertex(positions[43][0], positions[43][1]);
                    vertex(positions[38][0], positions[38][1]);
                    vertex(positions[39][0], positions[39][1]);
                    vertex(positions[40][0], positions[40][1]);
                    endShape(OPEN);

                    
                    //draw Eyes
                    beginShape();
                    vertex(positions[23][0], positions[23][1]);  
                    vertex(positions[63][0], positions[63][1]);
                    vertex(positions[24][0], positions[24][1]);
                    vertex(positions[64][0], positions[64][1]);
                    vertex(positions[25][0], positions[25][1]);
                    vertex(positions[65][0], positions[65][1]);
                    vertex(positions[26][0], positions[26][1]);
                    vertex(positions[66][0], positions[66][1]);
                    endShape(CLOSE);


                    beginShape();
                    vertex(positions[28][0], positions[28][1]);
                    vertex(positions[67][0], positions[67][1]);
                    vertex(positions[29][0], positions[29][1]);  
                    vertex(positions[68][0], positions[68][1]);
                    vertex(positions[30][0], positions[30][1]);
                    vertex(positions[69][0], positions[69][1]);
                    vertex(positions[31][0], positions[31][1]);
                    vertex(positions[70][0], positions[70][1]);
                    endShape(CLOSE);




          
          fill(0,2);


          beginShape();
          vertex(positions[44][0], positions[44][1]);
          vertex(positions[45][0], positions[45][1]);
          vertex(positions[46][0], positions[46][1]);
          vertex(positions[47][0], positions[47][1]);
          vertex(positions[48][0], positions[48][1]);
          vertex(positions[49][0], positions[49][1]);
           vertex(positions[50][0], positions[50][1]);
            vertex(positions[59][0], positions[59][1]);
             vertex(positions[60][0], positions[60][1]);
              vertex(positions[61][0], positions[61][1]);
          endShape(CLOSE);

                              beginShape();
          vertex(positions[44][0], positions[44][1]);
          vertex(positions[56][0], positions[56][1]);
          vertex(positions[57][0], positions[57][1]);
          vertex(positions[58][0], positions[58][1]);
          vertex(positions[50][0], positions[50][1]);
          vertex(positions[51][0], positions[51][1]);
           vertex(positions[52][0], positions[52][1]);
            vertex(positions[53][0], positions[53][1]);
             vertex(positions[54][0], positions[54][1]);
              vertex(positions[55][0], positions[55][1]);
          endShape(CLOSE);





          noStroke();
          beginShape();
            vertex(positions[59][0], positions[59][1]);
            vertex(positions[60][0], positions[60][1]);
            vertex(positions[61][0], positions[61][1]);
            vertex(positions[44][0], positions[44][1]);
          vertex(positions[56][0], positions[56][1]);
          vertex(positions[57][0], positions[57][1]);
          vertex(positions[58][0], positions[58][1]);
          vertex(positions[50][0], positions[50][1]);
          endShape(CLOSE);








        }


          for (var k=15; k<23; k++) {
          // set the color of the ellipse based on position on screen
          strokeWeight(1);
          stroke(map(positions[k][0], myWidth*0.33, myWidth*0.66, 0, 255), map(positions[k][1], myHeight*0.33, myHeight*0.66, 0, 255), 255,160);
          // draw ellipse at each position point
          line(positions[k][0], positions[k][1], positions[k][0], positions[k][1]-(level*200));



        }


          noFill();
          stroke(255,random(255),255,random(100));
          ellipse(positions[27][0], positions[27][1], level*100, level*100);
          ellipse(positions[32][0], positions[32][1], level*100, level*100);
          stroke(255,random(255),random(255),random(20));
          ellipse(positions[27][0], positions[27][1], level*250, level*250);
          ellipse(positions[32][0], positions[32][1], level*250, level*250);
          stroke(255,random(255),255,random(5));
          ellipse(positions[27][0], positions[27][1], level*500, level*500);
          ellipse(positions[32][0], positions[32][1], level*500, level*500);

//fjdkslafjskdljfkalsdjfklasjdfklasdjfklasdjfklsajfklasj;a







}

function detectBeat(level) {
  if (level  > beatCutoff && level > beatThreshold){
    onBeat();
    beatCutoff = level *1.1;
    framesSinceLastbeat = 0;
  } else{
    if (framesSinceLastbeat <= beatHoldFrames){
      framesSinceLastbeat ++;
    }
    else{
      beatCutoff *= beatDecayRate;
      beatCutoff = Math.max(beatCutoff, beatThreshold);
    }
  }
}


function onBeat() {
  backgroundColor = color( 5, random(5,10), random(5,20), 220);
  beatColor = color(random(100,255), random(2));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ===============
// Particle class
// ===============

var Particle = function() {
  this.position = createVector( random(0, width), height/2 );
  this.scale = random(1, 2);
  this.speed = random(0, 10);
  this.color = color( random(0,255), random(0,255), random(0,255) );
};

Particle.prototype.update = function(levelRaw) {
  this.diameter = map(levelRaw, 0, 1, 0, 400) * this.scale;
};

Particle.prototype.draw = function() {
  fill(this.color);
  ellipse(
    this.position.x, this.position.y,
    this.diameter, this.diameter
  );
};