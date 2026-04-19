/*
 Link: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
*/

function humanReadable(seconds) {
  if (seconds < 0 || seconds > 359999) return undefined
  if (seconds == 0) return "00:00:00"
  if (seconds < 60) return `00:00:${seconds}`

  const hh = Math.trunc(seconds / 3600);
  const hhDec = seconds % 3600;
  const mm = Math.trunc(hhDec / 60);
  const ss = hhDec % 60;

  return `${hh < 10 ? "0".concat(hh) : hh}:${mm < 10 ? "0".concat(mm) : mm}:${ss < 10 ? "0".concat(ss) : ss}`;
}

console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(3599))
console.log(humanReadable(3600))
console.log(humanReadable(45296))

