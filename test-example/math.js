// Refactor functions below, if you need to

// const add = (num1, num2) => num1 + num2;
const add = function (num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  return '숫자 유형일 때만 계산이 가능합니다';
};

// const substract = (num1, num2) => num1 - num2;
const substract = function (num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 - num2;
  }
  return '숫자 유형일 때만 계산이 가능합니다';
};

// const multiply = (num1, num2) => num1 * num2;
const multiply = function (num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2;
  }
  return '숫자 유형일 때만 계산이 가능합니다';
};

const divide = function (num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    if (num2 === 0) {
      return 'cannot divide something with 0';
    }
    return num1 / num2;
  }
  return '숫자 유형일 때만 계산이 가능합니다';
};

module.exports = {
  add,
  substract,
  multiply,
  divide,
};

console.log('disable eslint on this line');
