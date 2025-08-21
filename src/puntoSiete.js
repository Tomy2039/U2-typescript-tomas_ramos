var Car = /** @class */ (function () {
    function Car(make) {
        this.make = make;
    }
    Car.prototype.drive = function () {
        console.log("Driving a ".concat(this.make));
    };
    return Car;
}());
var auto = new Car("Ford");
auto.drive();
