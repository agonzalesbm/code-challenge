/*
 * Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
*/

function solution(str) {
  let res = [];

  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 != str.length) {
      res.push(`${str[i]}${str[i + 1]}`)
    } else {
      res.push(`${str[str.length - 1]}_`)
    }
  }

  return res;
}

console.log(solution("abc"))
console.log(solution("abcdef"))
