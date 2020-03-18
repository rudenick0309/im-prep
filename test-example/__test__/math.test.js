/* eslint-disable no-undef */
const {
  add, substract, multiply, divide,
} = require('../math');

// 1. Create test case to check add function works what it is supposed to be.
describe('더하기?', () => {
  test('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  
  test('숫자유형일 때만 계산이 가능합니다', () => {
    expect(add(1, 'z')).toBe('숫자 유형일 때만 계산이 가능합니다');
  });
});

// 2. Create test case to check substract function works what it is supposed to be.
// eslint-disable-next-line no-undef
describe('빼기?', () => {
  test('2 - 1 = 1', () => {
    expect(substract(2, 1)).toBe(1);
  });
  test('숫자유형일 때만 계산이 가능합니다', () => {
    expect(add(1, 'h')).toBe('숫자 유형일 때만 계산이 가능합니다');
  });
});
// 3. Create test case to check multiply function works what it is supposed to be.
describe('곱하기?', () => {
  test('1 * 2 = 3', () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test('숫자유형일 때만 계산이 가능합니다', () => {
    expect(add(1, 'h')).toBe('숫자 유형일 때만 계산이 가능합니다');
  });
});
// 4. Create test case to check divide function works what it is supposed to be.
describe('나누기?', () => {
  test('2 / 1 = 2', () => {
    expect(divide(2, 1)).toBe(2);
  });
  test('숫자유형일 때만 계산이 가능합니다', () => {
    expect(add(1, 'k')).toBe('숫자 유형일 때만 계산이 가능합니다');
  });
});
// 5. Create test case to check divide function reutns "cannot divide something with 0"
// when it tries to divdie a number with zero.
describe('나누는데?', () => {
  test('2/0 is ?', () => {
    expect(divide(2, 0)).toBe('cannot divide something with 0');
  });
});

// 6. Group tests using `describe()`
describe('math test result', () => {
  test('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('2 - 1 = 1', () => {
    expect(substract(2, 1)).toBe(1);
  });
  test('1 * 2 = 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test('2 / 1 = 2', () => {
    expect(divide(2, 1)).toBe(2);
  });
  test('2/0 is infinity', () => {
    expect(divide(2, 0)).toBe('cannot divide something with 0');
  });
});
