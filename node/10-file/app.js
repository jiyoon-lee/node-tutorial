const fs = require("fs");

// rename(..., callback(error, data)) -> 비동기
// try{ renameSync(....) }catch(e){} -> 동기
// promises.rename().then().catch(0)

try {
  // 동기적으로 동작하므로 아래의 코드가 끝날때까지 뒤로 넘어가지 않습니다.
  //   가급적 사용하지 않는 쪽이 좋습니다.
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (e) {
  console.error(e);
}
console.log("hello");

// 위 코드는 동기적 아래의 코드는 비동기적이기때문에 어느게 먼저 수행될지 모릅니다.

fs.rename("./text-new.txt", "./text.txt", (e) => {
  console.error(e);
  // 파일 이름이 변경되고 나서 callback함수가 출력이되는데
  // 에러가 발생하지 않았기 때문에 null로 출력됩니다.
});

fs.promises
  .rename("./text2.txt", "./text-new2.txt")
  .then(() => console.log("Done"))
  .catch(console.error);
