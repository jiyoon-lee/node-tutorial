import express from "express";

const app = express();

// express에서 body에 있는 내용을 읽기위해서는
// express에서 지원하는 middleware을 이용하면 됩니다.
// 아래의 json을 이용하면 요청이 들어오는 body부분을 자동으로 파싱에서
// 보여주는 역할을 합니다.

app.use(express.json());

app.post("/", (req, res, next) => {
  console.log(req.body);
});

app.listen(8080);
