function Store4(x, y) {
    this.x = x;
    this.y = y;

    this.show = () => {
        image(store4Img, this.x, this.y);
    }
}