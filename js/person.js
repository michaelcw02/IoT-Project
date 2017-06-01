function Person(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;

    this.show = () => {
        fill('#00CED1');
        ellipse(this.x, this.y, 24, 24);
    }

    this.move = (dir) => {
        //left
        if (dir == 0)
            this.x -= this.speed;
        //up
        if (dir == 1)
            this.y -= this.speed;
        //right
        if (dir == 2)
            this.x += this.speed;
        //down
        if (dir == 3)
            this.y += this.speed;

        if(this.x < 0)
            this.x = 0;
        if(this.y < 0)
            this.y = 0;
        if(this.x > 1000)
            this.x = 1000;
        if(this.y > 600)
            this.y = 600;
    }
}