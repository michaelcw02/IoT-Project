function Store1(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 16, this.y + 83, 85, 75);
    this.show = () => {
        image(store1Img, this.x, this.y);
        image(store1Ad, this.x + 30, this.y + 10, 60, 60);
        this.door.show();
    }
}