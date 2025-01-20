class Calculator {
  constructor() {
    // Initialise an empty array to store numbers
    this.numbers = [];
  }

  // Method to add a number to the list
  addNumber(number) {
    if (typeof number === 'number') {
      this.numbers.push(number);
    } else {
      throw new Error('Only numbers are allowed');
    }
  }
  clear() {
    this.numbers = [];
  }

  // Method to calculate the sum of all numbers
  calculate() {
    return this.numbers.reduce((total, num) => total + num, 0);
  }
}

module.exports = Calculator;