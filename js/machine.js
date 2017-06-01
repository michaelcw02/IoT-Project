function Machine(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        image(machineImg, this.x, this.y);
    }
}