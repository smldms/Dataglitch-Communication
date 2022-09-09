function terrain(maxH, minH, relief, clr1, clr2, dens, factor, sclX, sclY) {
    let posX = width * circlePosX.val
    let posY = height * circlePosY.val
    let radius = width * rad.val
    for (let y = maxH; y < minH; y += sclY) {
        let percent = round((y * 100) / minH);
        let row = [];
        let xoff = 0.01;
        // row.push(createVector(-width, y));
        for (let x = 0; x < width + sclX; x += sclX) {
            let distance = dist(x, y, posX, posY)
            strokeWeight(1)
            let n = noise(x * relief, y * relief);
            // let ampli = map(y, 0, height, factor, 0) * dens;
            let ampli = 23;
            let off = y + map(n, 0, 1, -ampli, ampli)
            row.push(createVector(x, off));
        }
        row.push(createVector(width, height));
        row.push(createVector(0, height));
        let lvl = map(y, maxH, height, 0, 1);
        let c = lerpColor(color(clr1), color(clr2), lvl);
        stroke(c)
        noFill()
        beginShape();
        for (let v of row) {
            vertex(v.x, v.y);
        }
        endShape(CLOSE);
    }
}

function noiser(zoneMax, zoneMin, rel, fac) {
    let l1 = {
        maxH: zoneMax,
        minH: zoneMin,
        relief: rel,
        clr1: palette.clr[0],
        clr2: palette.clr[1],
        dens: height,
        factor: fac,
        sclX: 5,
        sclY: 5
    }

    push()
    terrain(...Object.values(l1));
    pop()
}