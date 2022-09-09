////////////////INFO & FEATURES
let myTitle = "DATA GLITCH COMMUNICATION";
let info = '<h3>During the generation process<h/3><h5>Press h to hide this window</br>Press j to display it</h5>'
let present = '<h2>' + myTitle + '</h2><p>by</p><h3>smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.07"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
  "Palette": palette.name,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
// let globalW = window.innerWidth;
// let globalH = window.innerHeight;
let globalSize = 1280;
let pD = 1;
let agents = [];
let agentCount = 1000;
let noiseScale = globalSize;
let noiseStrength = 5;
let agentAlpha = 50;
let strokeWidth = 2;
let drawMode = 1;
let gen;
let cnv;
let maxF = 50


function setup() {
  cnv = createCanvas(globalSize, globalSize)
  // parent('fullScreen');
  pixelDensity(pD);
  progressClear()
  rectMode(CENTER)
  randomSeed(seed);
  noiseSeed(seed);
  rdmGradient()
  for (let i = 0; i < agentCount; i++) {
    agents[i] = new Agent();
  }

};

function draw() {
  // Draw agents
  let c = lerpColor(color(palette.clr[0]), color(palette.clr[1]), 0.5);
  c.setAlpha(agentAlpha);
  stroke(c)
  let percent = Math.round((frameCount / maxF) * 100)
  for (let i = 0; i < agentCount; i++) {
    progress(present + '<p>RENDERING:<br /><h2>' + percent + '%</h2></p>' + info);
    if (drawMode == 1) agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    else agents[i].update2(noiseScale, noiseStrength, strokeWidth);
  }

  if (frameCount > maxF) {
    noLoop()
    gen = new myObj();
    gen.postprod()
    // saver()
    // timer()
  }
  capturer.capture(cnv.canvas);
};