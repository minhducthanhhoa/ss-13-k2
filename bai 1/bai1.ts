abstract class Shape {
    name:string;
    constructor (name:string){
        this.name =name;
    }
    getName(){
        // lấy ra tên của hình 
        return `hinh la ${this.name}`;
    }
    
    abstract getSize():void;
}
class Rectangle1 extends Shape{
    width:number;
    height:number;
    constructor (name:string,width:number,height:number){
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): void {
        console.log("chieu dai",this.height);
        console.log("chieu rong",this.height);
    }
}
let rectangle1 = new Rectangle1("hinh tron",5,6);
console.log(rectangle1.getName());
console.log(rectangle1.getSize());