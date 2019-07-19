var Circle = /** @class */ (function () {
    function Circle(value) {
        this.PI = 3.14;
        this.radious = value;
    }
    Circle.prototype.Aarea = function () {
        this.area = this.radious * this.radious * this.PI;
    };
    Circle.prototype.dis = function () {
        console.log("value of area is\t" + this.area);
    };
    return Circle;
}());
var obj2 = new Circle(5);
var obj1 = new Circle(10);
obj1.Aarea();
obj1.dis();
obj2.Aarea();
obj2.dis();
