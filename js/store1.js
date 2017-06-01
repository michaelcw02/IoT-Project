function Store1(x, y) {
    this.x = x;
    this.y = y;

    this.show = () => {
        image(store1Img, this.x, this.y);
    }
}