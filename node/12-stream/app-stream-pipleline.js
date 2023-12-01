const fs = require("fs");
const data = [];

fs.createReadStream("./file.txt", {
  highWaterMark: 8,
}) //
  .once("data", (chunk) => {
    // on은 데이터가 발생할 때마다 콜백함수가 수행되는데 once는 딱 한번만 실행됩니다.
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.error(error);
  });
