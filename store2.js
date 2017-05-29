function Store2(x, y) {
    this.x = x;
    this.y = y;

    this.show = () => {
        image(store2Img, this.x, this.y);
    }
}