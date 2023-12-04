function sayHello() {
  console.log("hello");
}

function calculate(x, y) {
  console.log("calculate...");
  const result = x + y;
  console.log("result: ", result);
  sayHello();
  return result;
}

calculate(1, 2);
const stop = 4;
for (let i = 0; i < 10; i++) {
  console.log("count", i);
  if (i === stop) {
    break;
  }
}
