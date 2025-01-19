
const { Given, When, Then } = require('@cucumber/cucumber'); // Import Cucumber functions
const Calculator = require('../../calculator'); // Import Calculator class
const assert = require('assert'); // Node.js assert library for validations

let calc;

Given('I have a new calculator', function () {
  calc = new Calculator();
});

When('I add the number {int}', function (number) {
  calc.addNumber(number);
});

Then('the total should be {int}', function (expectedTotal) {
  const actualTotal = calc.calculate();
  assert.strictEqual(actualTotal, expectedTotal);
});