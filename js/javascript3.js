class Box {
    constructor(height, width, depth, material) {
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.material = material;
    }

    volume() {
        return this.height * this.width * this.depth;
    }
}

let box1 = new Box(12, 72, 13, "tree");
let box2 = new Box(45, 42, 17, "paper");
let box3 = new Box(17, 12, 45, "glass");

console.log(box1);
console.log(box2);
console.log(box3);

// box1.volume();
// box2.volume();
// box3.volume();

document.write("Обьем box1 = " + box1.volume() + "<br>");
document.write("Обьем box2 = " + box2.volume() + "<br>");
document.write("Обьем box2 = " + box3.volume() + "<br>");

