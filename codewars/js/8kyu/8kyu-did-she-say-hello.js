/*
Link: https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript

You riceived a whatsup message from an unknow number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
Write a simple function to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:
- hello - english
- ciao - italian
- salut - french
- hola - spanish
- ahoj - czech republic
- czesc - polish

Notes

- you can assyme the input is a string
- to keep this a beginner exercise yoy don't need to chek if the greeting is a subset of word (`Hallowen` can pass the test)
- function should be case insensitive to pass the tests
*/

function validateHello(greetings) {
  const regex = /^(hallo|hello|ciao|salut|hola|ahoj|czesc)+.*$/
  if (greetings.length == 0) {
    return regex.test(greetings.toLowerCase())
  }

  return greetings.split(" ").map((word) => {
    console.log(word)
    return regex.test(word.toLowerCase())
  }
  ).includes(true)
}

console.log(validateHello("ahoj"))
console.log(validateHello("hallo"))
console.log(validateHello("meh"))
console.log(validateHello("czesc?"))
console.log(validateHello("czescee"))
// console.log(validateHello("TsChUsS? DoING yOu WIe How DOIng, hOla TReS are You wie DOIng lA; YOU? YoU HaStA saLuT. HASTa? you? QuE. la. tRES"))
// console.log(validateHello("CZeSc? Wie, tsCHuSS haSta BIEN? biEN: YOu: Bien visTA. You; YOu? HOw: yoU! TSChUsS!"))
