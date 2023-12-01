const http = require("http");
const fs = require("fs");
// const http2 = require("http2"); // 모든 브라우저에서 https와 함께 적용이 되므로 개발pc에는 https를 위한 ssl sertification이 없습니다.

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);
const server = http.createServer((req, res) => {
  //   console.log("incomming...");
  //   console.log(req.headers);
  //   console.log(req.httpVersion);
  //   console.log(req.method);
  //   console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/not-found.html").pipe(res);
  }
});

server.listen(8080);
