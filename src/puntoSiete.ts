class Car {
    make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive() {
        console.log(`Driving a ${this.make}`)
    }
}

const auto = new Car("Ford");
auto.drive()