// class Car {
//   static getSpecs(car) {
//     console.log(
//       `maxSpeed: ${car.maxSpeed},speed: ${car.speed},isOn:${car.isOn}, distance:${car.distance}, price:${car.price}`
//     );
//   }

//   constructor({ speed, price, maxSpeed, isOn, distance }) {
//     this.speed = 0;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = distance;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   turnOn() {
//     this.isOn = true;
//     return this.isOn;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//     return this.isOn;
//   }

//   accelerate(value) {
//     let newSpeed = this.speed + value;
//     if (newSpeed <= this.maxSpeed) {
//       this.speed = this.speed + value;
//     }
//     return this.speed;
//   }

//   decelerate(value) {
//     let newSpeed = this.speed - value;
//     if (newSpeed >= 0) {
//       this.speed = this.speed - value;
//     }
//     return this.speed;
//   }

//   drive(hours) {
//     if (this.turnOn) {
//       this.distance = hours * this.speed;
//     }
//     return this.distance;
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
