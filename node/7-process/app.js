const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

// 지금은 아닌데 현재 수행되고 있는 코드가 다 완료된 후에 내가 등록한 콜백함수를 task queue에 넣어달라고 할때 사용할 수 있습니다.
// task queue에 이미 다른 콜백함수가 들어있어도 그 순서를 무시하고 nextTick의 콜백함수를 제일 우선순위를 높여서 테스트큐 제일 앞부분에 넣어줍니다.
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 10000; i++) {
  console.log("for loop");
}
