class myObj {
  constructor() {}

  back() {
    rdmGradient()
    fxrandArray(palette.clr)
    grainy(10)
  }

  show() {

    // await progress(present + '<p>RENDERING:...</p>');
  }

  postprod() {
    grainy(10)
    myFrame(width / 2, height / 2, 15, width, height, random(palette.bgClr))
    progressClear();
    myPreview()
  }
}