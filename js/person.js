function Person(x, y) {
    this.x = x;
    this.y = y;
    this.w = 24; // width
    this.h = 24; // height
    this.speed = 2;
    this.canMove = true;

    this.show = () => {
        ellipseMode(RADIUS);
        fill('#00CED1');
        ellipse(this.x, this.y, 12, 12);
    }

    this.move = (dir) => {
        if(this.canMove === true) {
            //left
            if (dir == 0) this.x -= this.speed;
            //up
            if (dir == 1) this.y -= this.speed;
            //right
            if (dir == 2) this.x += this.speed;
            //down
            if (dir == 3) this.y += this.speed;

            //boundaries
            if(this.x < 0) this.x = 0;
            if(this.y < 0) this.y = 0;
            if(this.x > 1000) this.x = 1000;
            if(this.y > 600) this.y = 600;

        }
    }

    this.valueInRange = (value, min, max) => {
        return (value >= min) && (value <= max);
    }

    this.isNear = (object) => {
        let xOverlap = this.valueInRange(this.x, object.x, object.x + object.w) || this.valueInRange(object.x, this.x, this.x + this.w)
        let yOverlap = this.valueInRange(this.y, object.y, object.y + object.h) || this.valueInRange(object.y, this.y, this.y + this.h)
        return xOverlap && yOverlap;
    }
}