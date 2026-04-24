/*
Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

Move the first letter of each word tot he end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  return str.split(" ").map((value) =>
    !(/^\p{P}$/u.test(value)) ? value.concat(value[0], "ay").slice(1) : value
  ).join(" ");
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));
