"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        // lấy ra tên của hình 
        return `hinh la ${this.name}`;
    }
}
class Rectangle1 extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("chieu dai", this.height);
        console.log("chieu rong", this.height);
    }
}
let rectangle1 = new Rectangle1("hinh tron", 5, 6);
console.log(rectangle1.getName());
console.log(rectangle1.getSize());
