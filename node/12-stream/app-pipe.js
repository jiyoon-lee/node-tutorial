const fs = require("fs");

// 파이핑은 여러가지를 묶어서 쓸 수 있는데
const zlib = require("zlib"); // node.js에서 제공하는 압축할 수 있는 모듈을 이용해봅시다.

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
// 읽어온 데이터를 그대로 연결합니다. 스트림과 스트림을 연결해서 데이터가 물처럼 흘러갈 수있도록 합니다.
// readStream을 받아서 writeStream을 연결해 줄 수 있습니다.
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});

// piping은 서버를 만들때도 도움이 됩니다.
const http = require("http"); // http 서버를 만들고
const server = http.createServer((req, res) => {
  fs.readFile("file.txt", (err, data) => {
    // res.end(data); // 서버에서는 file.txt를 전부 읽은 다음에 data를 보내줍니다.
    const stream = fs.createReadStream("./file.txt");
    stream.pipe(res); // stream 자체를 response에 파이핑에서 연결해주면 좋습니다.
  });
});
server.listen(3030);
