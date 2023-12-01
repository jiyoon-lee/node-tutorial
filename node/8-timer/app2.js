console.log("code1"); // 1
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0"); // 0.1667
  console.log("setTimeout 0"); // 5
}, 0); // 정확하게 0초가 보장되지는 않습니다.
// setTimeout 0이라는 것은 setImmediate와 비슷하지만 실제로 콜백함수가 실행되기 위해서는
// 콜 스택이 텅텅 빌때까지 기다려야 합니다.

console.log("code2"); // 2
setImmediate(() => {
  console.log("setImmediate"); // 6
});

console.log("code3"); // 3
process.nextTick(() => {
  console.log("process.nextTick"); // 4
});
