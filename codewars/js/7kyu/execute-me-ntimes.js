/*
* https://www.codewars.com/kata/5b2b4836b6989d207700005b/train/javascript
*/

async function execute(action, nTimes) {
  const actions = []
  for (let i = 0; i < nTimes; i++) {
    actions.push(action())
  }
  await Promise.all(actions)
}
