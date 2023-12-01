import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    optionsSuccessStatus: 200, // http options 메소드에 의해서 200으로 자동응답하도록 만듭니다.
    credentials: true, // 헤더의 토큰이나 사용자의 정보를 추가하려고 허용한다면 Access-Control-Allow-Credentials: true
  })
);
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, DELETE"
//   );
//   next();
// });
app.get("/", (req, res) => {
  res.send("Welcome!");
});
app.listen(8080);
