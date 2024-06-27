// Exports `Triangle`, `Circle`, and `Square` classes
const inquirer=require('inquire')
;
class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  module.exports = Shape;
  
  const Circle = require('.lib/Circle');
const Triangle = require('.lib/Triangle');
const Square = require('.lib/Square');

module.exports = { Circle, Triangle, Square };