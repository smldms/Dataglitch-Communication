//////////***BRUSH
let brush = {
    n: fxrand(),
    val : 0,
    name: ''
}
if (brush.n < 0.25) {
    brush.val = 0
    brush.name = 'ALT'
}

else {
    brush.val = 1
    brush.name = 'NORMAL'
}

///////////AGENTS
let ag = {
    n: fxrand(),
    name: '',
    val: 1
}
if (ag.n < 0.33) {
    ag.val = 1.5
    ag.name = 'MAX'
}
else if (ag.n < 0.66) {
    ag.val = 1
    ag.name = 'NORMAL'
}
else {
    ag.name = 'MIN'
    ag.val = 0.75
}

///////////RADIUS
let rad = {
    n: fxrand(),
    name: '',
    val: 3
}
if (rad.n < 0.33) {
    rad.val = 4
    rad.name = 'LARGE'
}
else if (rad.n < 0.66) {
    rad.val = 5
    rad.name = 'MEDIUM'
}
else {
    rad.name = 'SMALL'
    rad.val = 6
}


///////////IN RADIUS
let inRad = {
    n: fxrand(),
    name: '',
    val: 0.5
}
if (inRad.n < 0.33) {
    inRad.val = 0.66
    inRad.name = 'LARGE'
}
else if (inRad.n < 0.66) {
    inRad.val = 0.5
    inRad.name = 'MEDIUM'
}
else {
    inRad.name = 'SMALL'
    inRad.val = 0.33
}

/////////////////////////AMP
let amp = {
    n: fxrand(),
    val: 1,
    name: ""
}

if (amp.n < 0.2) {
    amp.val = 2.5
    amp.name = "A"
}
else if (amp.n < 0.4) {
    amp.val = 5
    amp.name = "B"
}
else if (amp.n < 0.6) {
    amp.val = 10
    amp.name = "C"
}
else if (amp.n < 0.8) {
    amp.val = 100
    amp.name = "D"
}
else {
    amp.val = 250
    amp.name = "E"
}

/////////////////////////GRADIENT
let grd = {
    n: fxrand(),
    name: ""
}

if (grd.n < 0.5) {
    grd.name = "RADIAL"
}
else { grd.name = "LINEAR" }

/////////////////////////FORCE
let turb = {
    n: fxrand(),
    val: 0.1,
    name: ""
}

if (turb.n < 0.25) {
    turb.val = 0.001
    turb.name = "A"
}
else if (turb.n < 0.5) {
    turb.val = 0.01
    turb.name = "B"
}
else if (turb.n < 0.75) {
    turb.val = 0.033
    turb.name = "C"
}
else {
    turb.val = 0.05
    turb.name = "D"
}

