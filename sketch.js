


let MAX_HEIGHT = 600;
let MAX_WIDTH = 600;
let STEP = 16;
let VARIANCE_FACTOR = 60;
const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
const MONOCHROME = [[0, 32, 63]];
//skin tones
const TONES_3 = [[255, 220, 177], [217, 145, 100], [68, 0, 0], [199, 122, 88]];
const TONES_4 =[[204, 132, 67], [165, 57, 0], [253, 228, 200], [91, 0, 0]];

// const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
// const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
// const MONOCHROME = [[0, 32, 63]];

// const random_index = Math.floor(Math.random() * TONES_1.length);
// const [r, g, b] = TONES_1[random_index];
// fill(r, g, b);


function setup() {
  createCanvas(MAX_HEIGHT, MAX_WIDTH);
  background(255);
  noStroke();
  noLoop();
}

function draw() {
  //left upper side
  const lines = [];
  for (let lineX = STEP; lineX < MAX_WIDTH - STEP; lineX += 100){
  let line = [];
  for(let j = STEP; j <= MAX_WIDTH - STEP; j += STEP){    
    let distanceToCenter = Math.abs(j - MAX_HEIGHT / 3);
    let variance = Math.max(MAX_WIDTH / 6 - VARIANCE_FACTOR - distanceToCenter, 0);
    let random = Math.random() * variance / .75 * -1;
    let point = {x: lineX + random, y: j};
    line.push(point)
     }
     lines.push(line);
  }

    for(let lineX = 2; lineX < lines.length; lineX++){
      beginShape();
      for(let j = 0; j < lines[lineX].length; j+=2){
        curveVertex(lines[lineX][j].x, lines[lineX][j].y);
        let random_index = Math.floor(Math.random() * TONES_4.length);
        const [r, g, b] = TONES_4[random_index];
        fill(r, g, b);
        curveVertex(lines[lineX][j + 1].x, lines[lineX][j + 1].y)
      }
      endShape();
    }
  //right upper side
  const ruLines = [];
  for (let lineX = STEP; lineX < MAX_WIDTH - STEP; lineX += 100){
  let line = [];
  for(let j = STEP; j <= MAX_WIDTH - STEP; j += STEP){    
    let distanceToCenter = Math.abs(j - MAX_HEIGHT / 3);
    let variance = Math.max(MAX_WIDTH / 6 - VARIANCE_FACTOR - distanceToCenter, 0);
    let random = Math.random() * variance / .75 * 1;
    let point = {x: lineX + random, y: j};
    line.push(point)
     }
     ruLines.push(line);
  }

    for(let lineX = 2; lineX < ruLines.length; lineX++){
      beginShape();
      for(let j = 0; j < ruLines[lineX].length; j+=2){
        curveVertex(ruLines[lineX][j].x, ruLines[lineX][j].y);
        let random_index = Math.floor(Math.random() * TONES_3.length);
        const [r, g, b] = TONES_3[random_index];
        fill(r, g, b);
        curveVertex(ruLines[lineX][j+1].x, ruLines[lineX][j+1].y)
      }
      endShape();
    }


}