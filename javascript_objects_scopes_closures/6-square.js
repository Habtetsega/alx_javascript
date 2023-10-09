import { Square } from '/5-square.js';
class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }

    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;
