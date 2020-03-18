/*
multiplicativePersistence 함수를 작성합니다.

multiplicativePersistence 함수는 양수를 파라미터로 받는 함수로,
각 자릿의 숫자들을 곱한 결과물들이 하나의 숫자가 될 때까지 반복적으로 곱한 후,
최후의 한 자리 숫자를 리턴하는 함수입니다.

예를 들어 786을 인자로 넘길 경우, 함수는 0을 리턴해야 합니다.
7 * 8 * 6 -> 336
3 * 3 * 6 -> 54
5 * 4 -> 20
2 * 0 -> 0

*/

// 자릿수의 곱셈이 한자리가 될때까지 함수를 반복한다.
// num을 string으로 변환 후 자릿수마다 쪼갠다.
// 다시 숫자변환 후 곱한다.
// 이 작업을 num이 한자리가 될때까지 진행한다.


function multiplicativePersistence(num) {
  // your code here

  if (num === 0) {
    return 0;
  }
  if (num < 10) {
    return num;
  }

  const arr = String(num).split(''); // ["1", "2", "3"]

  const result = arr.reduce((pre, val) => Number(pre) * Number(val));

  if (result > 9) { // 10이상의 숫자라면 또 반복해야된다.
    console.log(result);
    return multiplicativePersistence(result); // 여기가문제.... 리턴을 안했었다.......
  }

  return result;
}

if (typeof window === 'undefined') {
  module.exports = multiplicativePersistence;
}
