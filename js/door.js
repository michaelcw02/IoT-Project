function Door(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.show = () => {
        noFill();
        stroke(255, 0, 0);
        rect(this.x, this.y, this.w, this.h);
    }
}