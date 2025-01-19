const Calculator = require('./calculator');
const calc = new Calculator();
calc.addNumber(5);
calc.addNumber(10);
calc.addNumber(15);
console.log(calc.calculate());