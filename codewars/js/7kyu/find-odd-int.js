/*
 * https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript*/

function findOdd(arr) {
  let index = 0
  let setArr = new Set(arr)
  const pairs = new Map()

  setArr.forEach((value) => {
    pairs.set(
      arr.filter((e) =>
        e === value).length,
      value
    )
  })

  pairs.forEach((_, k) => {
    index = k % 2 !== 0 ? k : index
  })

  return pairs.get(index);
}


console.log(
  findOdd([1, 1, 1, 2, 2, 3, 3, 3, 3])
)
