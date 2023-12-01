const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8") //
  .then((data) => console.log(data)) // text 파일 안의 내용을 버퍼 형태로 읽어옵니다.
  .catch(console.error);

// writing a file
fs.writeFile("./file.txt", "Hello, Jiyoon!") //
  .catch(console.error);

fs.writeFile("./file.txt", "Yo!!!, Jiyoon!") // 기존의 데이터는 유지하면서 데이터를 추가하고 싶을 때는
  .catch(console.error);

fs.appendFile("./file.txt", "Yo!!!, Jiyoon!!:)") //
  .catch(console.error);

// copy
// 복사된 file2 안에는 아무런 내용이 들어가 있지 않은데
// 비동기로 처리되기 때문에 우리가 데이터를 작성하기 전에 복사했을 수도 있습니다.
fs.copyFile("./file.txt", "./file2.txt").catch(console.error);

// 순차적으로 하고 싶다면
fs.appendFile("./file.txt", "Yo!! Jiyoon!!!!:)))") //
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
  })
  .catch(console.error);

// 순서대로 코드를 작성했어도 모든 코드가 promise이므로 비동기적으로 처리되어 순서가 보장이 되지 않습니다.
// 순서를 보장하고 싶다면 then 안에서 해당 promise가 처리된 다음 특정한 작업이 되도록 해야합니다.

// folder
fs.mkdir("sub-folder") //
  .catch(console.error);

fs.readdir("./") //
  .then(console.log) //
  .catch(console.error);
