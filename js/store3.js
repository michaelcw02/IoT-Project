function Store3(x, y) {
    this.x = x;
    this.y = y;

    this.show = () => {
        image(store3Img, this.x, this.y);
    }
}