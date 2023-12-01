const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finished!");
});

writeStream.write("hello!");
writeStream.write("world!");
// 뭔가를 썼는데 끝나는 이벤트에 대해서 작성하고 싶다면
writeStream.end();
