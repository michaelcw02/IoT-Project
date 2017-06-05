function Item(name, x, y, w, h, img) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.qty = 10;

    this.show = () => {
        if(this.img != undefined)    image(this.img, this.x, this.y, this.w, this.h);
        noFill();
        rect(this.x, this.y, this.w, this.h);
    }
    
    this.valueInRange = (value, min, max) => {
        return (value >= min) && (value <= max);
    }

    this.collision = (object) => {
        let xOverlap = this.valueInRange(this.x, object.x, object.x + object.w) || this.valueInRange(object.x, this.x, this.x + this.w)
        let yOverlap = this.valueInRange(this.y, object.y, object.y + object.h) || this.valueInRange(object.y, this.y, this.y + this.h)
        return xOverlap && yOverlap;
    }
}