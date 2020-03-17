const { add, substract, multiply, divide } = require("../math");

// 1. Create test case to check add function works what it is supposed to be.
describe('더하기?', function() {
    test('1 + 2 = 3', function () {
        expect(add(1,2)).toBe(3);
    })
})

// 2. Create test case to check substract function works what it is supposed to be.
describe('빼기?', function() {
    test('2 - 1 = 1', function () {
        expect(substract(2,1)).toBe(1);
    })
})
// 3. Create test case to check multiply function works what it is supposed to be.
describe('곱하기?', function() {
    test('1 * 2 = 3', function () {
        expect(multiply(1,2)).toBe(2);
    })
})
// 4. Create test case to check divide function works what it is supposed to be.
describe('나누기?', function() {
    test('2 / 1 = 2', function () {
        expect(divide(2,1)).toBe(2);
    })
})
// 5. Create test case to check divide function reutns "cannot divide something with 0"
// when it tries to divdie a number with zero.
describe('나누는데?', function() {
    test('2/0 is NaN', function () {
        expect(divide(2,0)).toBe("cannot divide something with 0")
    })
})

// 6. Group tests using `describe()`
describe('math test result', function() {
    test('1 + 2 = 3', function () {
        expect(add(1,2)).toBe(3);
    })
    test('2 - 1 = 1', function () {
        expect(substract(2,1)).toBe(1);
    })
    test('1 * 2 = 2', function () {
        expect(multiply(1,2)).toBe(2);
    })
    test('2 / 1 = 2', function () {
        expect(divide(2,1)).toBe(2);
    })
    test('2/0 is infinity', function () {
        expect(divide(2,0)).toBe("cannot divide something with 0")
    })
})
