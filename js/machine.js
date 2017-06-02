function Machine(x, y) {
    this.x = x;
    this.y = y;
    this.w = 32; //width 
    this.h = 32; //height

    this.show = function () {
        image(machineImg, this.x, this.y, this.w, this.h);
        //filling a red line around it
        noFill();
        stroke(255,0,0);
        rect(this.x, this.y, this.w, this.h);
    }
}