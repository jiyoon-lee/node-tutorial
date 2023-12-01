const fs = require("fs");

const beforeMem = process.memoryUsage().rss; // 사용중인 메모리의 상태를 저장해둡니다.
fs.readFile("./file.txt", (_, data) => {
  // 파일을 다 읽습니다. 데이터를 한번에 다 받아옵니다.
  fs.writeFile("./file2.txt", data, () => {}); // 읽은 데이터를 새로운 file2에 저장합니다.
  // 실제로 메모리 사용에 얼마나 큰 변화가 있는지 차이점을 메가 바이트로 출력합니다.
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff); // 5074944
  console.log(`Consumed Memory: ${consumed}MB`); // Consumed Memory: 4.83984375MB
});

// 만약 file.txt파일이 내가 가지고 있는 컴퓨터의 메모리 사이즈보다 큰 사이즈라면 다 일거올 수 없습니다.
// 하지만, 스트림을 이용하면 조금씩 buffer별로 읽고쓰고 읽고 쓰고를 반복하면 데이터를 순차적으로 처리할 수 있습니다.
