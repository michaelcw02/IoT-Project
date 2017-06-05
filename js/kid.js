function Kid(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.d = 0;
    this.speed = 4;

    this.move = () => {
        this.d = floor(random(8));
        if (this.d === 0) this.x -= this.speed;
        //up
        if (this.d === 1) this.y -= this.speed;
        //right
        if (this.d === 2) this.x += this.speed;
        //down
        if (this.d === 3) this.y += this.speed;
        if (this.d === 4) {
            this.x -= this.speed;
            this.y -= this.speed;
        }
        if (this.d === 5) {
            this.x -= this.speed;
            this.y += this.speed;
        }
        if (this.d === 6) {
            this.x += this.speed;
            this.y -= this.speed;
        }
        if (this.d === 7) {
            this.x += this.speed;
            this.y += this.speed;
        }

        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
        if (this.x > 1000) this.x = 1000;
        if (this.y > 650) this.y = 650;
    }

    this.show = () => {
        fill('#00CED1');
        ellipseMode(CENTER);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

}