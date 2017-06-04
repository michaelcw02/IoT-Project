function Technician(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.canMove = false;
    this.frame = 0;
    this.direction = 2; //0 down, 1 up, 2 left, 3 right
    this.visible = true;

    this.move = () => {
        if(this.canMove) {
            if(this.direction === 2) {
                if(this.x > 200) {
                    this.x -= this.speed + 3;
                    this.y += this.speed;
                } else {
                    this.canMove = false;
                }
            }
            if(this.direction === 3) {
                if(this.x < 600) {
                    this.x += this.speed + 3;
                    this.y -= this.speed;
                } else {
                    this.canMove = false;
                    this.visible = false;
                }
            }
        }
    }
    this.show = () => {
        if(this.visible) {
            if(this.canMove === true) {
                image(techImg, this.x, this.y, 150, 150, 400.25 * this.frame++, 599.25 * this.direction, 400.25, 599.25);
                this.frame = (this.frame === 3) ? 0 : this.frame;
            } else {
                image(techImg, this.x, this.y, 150, 150, 400.25 * this.frame, 599.25 * this.direction, 400.25, 599.25);
            }
        }
    }
}