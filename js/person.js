function Person(x, y) {
    this.x = x;
    this.y = y;
    this.r = 12;
    this.w = 24; // width
    this.h = 24; // height
    this.speed = 5;
    this.canMove = true;

    this.show = () => {
        fill('#00CED1');
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };

    this.setPosition = (x, y, z) => {
        this.x = x;
        this.y = y;
    }

    this.move = (dir, level) => {
        if(this.canMove === true) {
            //left
            if (dir === 0) this.x -= this.speed;
            //up
            if (dir === 1) this.y -= this.speed;
            //right
            if (dir === 2) this.x += this.speed;
            //down
            if (dir === 3) this.y += this.speed;

            if(level === 0 || level === 3 || level === 2) {
                //boundaries for level 0, mall
                if(this.x < 0) this.x = 0;
                if(this.y < 0) this.y = 0;
                if(this.x > 1000) this.x = 1000;
                if(this.y > 650) this.y = 650;
            }
            if(level === 4) {
                if(this.x < 187) this.x = 187;
                if(this.y < 0) this.y = 0;
                if(this.x > 813) this.x = 813;
                if(this.y > 600) this.y = 600;
            }

        }
    }

    this.collision = (obj) => {
        var closeX = this.x;
        var closeY = this.y;
        //checks left side of rect
        if(this.x < obj.x)          closeX = obj.x;
        //checks right side of rect
        if(this.x > obj.x + obj.w)  closeX = obj.x + obj.w;
        //checks top side of rect
        if(this.y < obj.y)          closeY = obj.y;
        //checks bottom side of rect
        if(this.y > obj.y + obj.h)  closeY = obj.y + obj.h;

        var distance = dist(this.x, this.y, closeX, closeY);
        if(distance < this.r)   return true;
        return false;
    }
}

