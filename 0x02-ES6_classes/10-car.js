const cloneMethod = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneMethod]() {
    const { constructor, ...properties } = this;
    return new constructor(...Object.values(properties));
  }

  cloneCar() {
    return this[cloneMethod]();
  }
}

export default Car;
