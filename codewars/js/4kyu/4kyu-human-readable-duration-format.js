/*
Link: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
*/

function formatDuration(seconds) {
  const hours = Math.trunc(seconds / 3600);
  const minutes = Math.trunc((seconds % 3600) / 60);
  const secs = seconds < 60 ? seconds : Math.trunc(minutes % 60);

  console.log(hours, minutes, secs)

  const secsStr = secs === 1 ? `${secs} second` : `${secs} seconds`;
  const minutesStr = minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
  const hoursStr = hours === 1 ? `${hours} hour` : `${hours} hours`;

  const str = "";

  if (hours > 0 && minutes == 0 && secs == 0) str.concat(hoursStr);
  if (hours > 0 && minutes > 0 && secs == 0) str.concat(`${hours}`)

  // if (hours === 1) str.concat(hours + " hour")
  // if (hours !== 1 && hours > 0) str.concat(hours + " hours")
  // if (minutes === 1 && hours > 0) str.concat(`, ${minutes} minute`)
  // if (minutes !== 1 && minutes > 0 && hours > 0) str.concat(`, ${minutes} minutes`)
  // if (minutes === 1 && hours === 0) str.concat("")
  // if (secs !== 1) str.concat(``)

  return `${hours ? hours + " hour, " : ""}${minutes ? minutes + " minute and " : ""}${secs ? secs + " seconds" : ""}`;
}

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
