function add(a, b) {
    return a + b;
  }
  
  module.exports = { add };
  /**
 * @module myLibrary/module1
 */

/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 * @throws {Error} If a or b is not a number.
 * @example
 * const myLibrary = require('my-library');
 * const result = myLibrary.module1.add(5, 3);
 // result is 8*/