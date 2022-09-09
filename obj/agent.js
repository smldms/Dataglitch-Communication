let Agent = function () {
    this.vector = createVector(random(width), random(height));
    this.vectorOld = this.vector.copy();
    this.stepSize = 23;
    this.isOutside = false;
    this.angle;
    this.offset = fxrand();
    this.offset2 = fxrand();
};

Agent.prototype.update = function () {
    let noisy = map(noise(this.offset), 0, 1, 1, 2)
    let noiseMap = map(noise(this.offset2), 0, 1, -width, width)
    this.vector.x += cos(this.angle * noisy)* sin(frameCount * noisy) * this.stepSize;
    this.vector.y += sin(this.angle * noisy) * this.stepSize;
    this.isOutside = this.vector.x < 0 || this.vector.x > width || this.vector.y < 0 || this.vector.y > height;
    if (this.isOutside) {
        this.vector.set(random(width), random(height));
        this.vectorOld = this.vector.copy();
    }

    let distance = dist(this.vector.x, this.vector.y, width / 2, height / 2)
    strokeWeight(strokeWidth);
    dropShad(distance / 10, distance / 10, distance / 10, 0, 100)

    push()
    noFill()
    beginShape()
    vertex(this.vectorOld.x, this.vectorOld.y)
    vertex(this.vector.x, this.vector.y)

    rect(this.vectorOld.x, this.vectorOld.y,distance / 50)

    endShape()
    pop()




    this.vectorOld = this.vector.copy();
    this.isOutside = false;
    this.offset += 0.0025;
    this.offset2 += 0.0025;
};

Agent.prototype.update1 = function (noiseScale, noiseStrength, strokeWidth) {
    this.angle = noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * noiseStrength;
    this.update(strokeWidth);
};

Agent.prototype.update2 = function (noiseScale, noiseStrength, strokeWidth) {
    this.angle = noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * 24;
    this.angle = (this.angle - floor(this.angle)) * noiseStrength;
    this.update(strokeWidth);
};