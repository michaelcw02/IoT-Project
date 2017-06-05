function Machine(x, y) {
    this.x = x;
    this.y = y;
    this.w = 32; //width 
    this.h = 32; //height

    this.show = function () {
        image(machineImg, this.x, this.y, this.w, this.h);
    }
}