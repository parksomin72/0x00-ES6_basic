import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const { constructor, ...properties } = this;
    return new Car(...Object.values(properties));
  }
}

export default EVCar;
