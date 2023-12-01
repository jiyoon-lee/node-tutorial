const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
// const http2 = require("http2"); // 모든 브라우저에서 https와 함께 적용이 되므로 개발pc에는 https를 위한 ssl sertification이 없습니다.

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = "Jiyoon";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
];
const server = http.createServer((req, res) => {
  //   console.log("incomming...");
  //   console.log(req.headers);
  //   console.log(req.httpVersion);
  //   console.log(req.method);
  //   console.log(req.url);
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    fs.createReadStream("./html/index.html").pipe(res);
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/not-found.ejs", { name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);
