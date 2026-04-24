/*
* https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript
*/

function jumpingNumber(n) {
  if (n < 0) return
  if (n < 10) return "Jumping!!"

  const arr = n.toString().split("");
  let res = true

  for (let i = 0; i < arr.length; i++) {
    if (!res || arr[i + 1] === undefined) break
    res = Number(arr[i]) + 1 == Number(arr[i + 1]) ||
      Number(arr[i]) - 1 == Number(arr[i + 1])
    console.log(res)
  }

  return res ? "Jumping!!" : "Not!!"
}


console.log(jumpingNumber(67))
