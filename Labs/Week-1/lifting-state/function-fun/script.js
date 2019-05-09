class Calculator {
  sum(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
const boundSum = calc.sum.bind(calc);

boundSum(1, 2); // => 3

const addOne = calc.sum.bind(calc, 1);
addOne(3); // => 4

const addFiveHundred = calc.sum.bind(calc, 500)
addFiveHundred(1); // => 501

