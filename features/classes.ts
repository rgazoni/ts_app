//Public -> called anytime
//Private -> Just your class
//Private -> Use to restrict other developers. Do not add a security layer for a malicious activity
//Protected -> other methods and this class or child

class Vehicle {
    constructor(public color: string){}
    public drive(): void {
        console.log('chugga chugga');
    }
    public honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle{
    constructor(public wheels: number, color: string){
        super(color);
    }
    //Override
    drive(): void {
        console.log('vroom');
    }
}

const vehicle = new Vehicle('blue');
vehicle.drive();
vehicle.honk();

const car = new Car(4, 'white');
car.drive();
car.honk();
