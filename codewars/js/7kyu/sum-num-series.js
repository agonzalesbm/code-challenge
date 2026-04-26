/*
 * https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
 * */

function getSum(a, b) {
  const size = b > a ? Math.abs(b - a) + 1 :
    Math.abs(a - b) + 1
  return Array.from({ length: size }, (_, i) =>
    b > a ? a + i : b + i
  ).reduce((p, c) => p += c)
}

console.log(getSum(2, 5))
console.log(getSum(3, -2))
