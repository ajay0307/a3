var Arithmetic = /** @class */ (function () {
    function Arithmetic(value, value2) {
        this.Number1 = value;
        this.Number2 = value2;
    }
    Arithmetic.prototype.display = function () {
        console.log("\n First value : " + this.Number1, "\n second value:" + this.Number2);
    };
    Arithmetic.prototype.add = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.mul = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic.prototype.div = function () {
        return this.Number1 / this.Number2;
    };
    Arithmetic.prototype.sub = function () {
        return this.Number1 - this.Number2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(10, 20);
var obj2 = new Arithmetic(5, 10);
obj1.display();
obj2.display();
var iret, ret;
var ch = 0;
while (1) {
    ch++;
    switch (ch) {
        case 1:
            {
                iret = obj1.add();
                ret = obj2.add();
                console.log("\n1.Addition is :" + iret);
                console.log("\n2.Addition is :" + ret);
                break;
            }
        case 2:
            {
                iret = obj1.sub();
                ret = obj2.sub();
                console.log("\n1.Substraction is :" + iret);
                console.log("\n2.Substraction is :" + ret);
                break;
            }
        case 3:
            {
                iret = obj1.mul();
                ret = obj2.mul();
                console.log("\n1.Multiplication is :" + iret);
                console.log("\n2.Multiplication is :" + ret);
                break;
            }
        case 4:
            {
                iret = obj1.div();
                ret = obj2.div();
                console.log("\n1.Division is :" + iret);
                console.log("\n2.Division is :" + ret);
                break;
            }
    }
    if (ch == 4) {
        break;
    }
}
