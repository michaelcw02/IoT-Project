function Item(name, x, y, w, h, img) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;

    this.show = () => {
        if(img != undefined)    image(this.img, this.x, this.y, this.w, this.h);
        noFill();
        stroke(255, 0, 0);
        rect(this.x, this.y, this.w, this.h);
    }
}