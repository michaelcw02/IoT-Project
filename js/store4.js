function Store4(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 120, this.y + 68, 85, 67);

    this.show = () => {
        image(store4Img, this.x, this.y);
        this.door.show();
    }
}