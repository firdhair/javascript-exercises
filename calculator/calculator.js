const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (theArgs) {
  let sumNum = 0;
  //let args = [...theArgs];

  for (let i = 0; i < theArgs.length; i++) {
    sumNum += theArgs[i];
  }
  return sumNum;
};

const multiply = function (multiNum) {
  let multi = 1;
  for (let i = 0; i < multiNum.length; i++) {
    multi *= multiNum[i];
  }
  return multi;
};

const power = function (aFirst, bFirst) {
  let sumNum = 1;

  for (let i = 0; i < bFirst; i++) {
    sumNum *= aFirst;
  }
  return sumNum;
};

const factorial = function (factNum) {
  const ori = factNum; // keep factNum original value
  let sumNum = 1;

  for (let i = 0; i < ori; i++) {
    sumNum *= factNum; // multiply with current factNum value
    factNum--; // decrease factNum value by each loop
  }
  return sumNum;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
