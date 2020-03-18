/*
"sumDigits" 함수를 작성합니다.

숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.
만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.

let output1 = sumDigits(1148);
console.log(output1); // --> 14

let output2 = sumDigits(-316);
console.log(output2); // --> 4
*/

function sumDigits(num) {
  // your code here
  let sum = 0;
  const arrN = num.toString().split('');
  console.log('체크', arrN);
  for (let i = 0; i < arrN.length; i += 1) {
    if (arrN[0] === '-' && i === 1) {
      sum -= Number(arrN[1]);
    } else if (arrN[i] !== '-') {
      sum += Number(arrN[i]);
    }
  }
  return sum;
}

module.exports = sumDigits;