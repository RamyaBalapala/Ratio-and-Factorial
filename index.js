const ratioOfNumbers = require("../ratio/index");

const factorialNumber = require("../factorial/index");

const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = ratioOfNumbers(n1, n2);

  const factorial = factorialNumber(n3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
