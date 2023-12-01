import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// 우리가 사용자에게 요청을 받을 때마다 어떤 요청을 받았는지 얼마나 걸렸는지 유용한 정보를
// 로그롤 남기고 싶을 때 사용
// https://github.com/expressjs/morgan
import morgan from "morgan";

// 공통적으로 보안에 필요한 헤더를 추가해줍니다.
import helmet from "helmet";
// npm i cookie-parser morgan helmet
const corsOptions = {
  origin: ["http://127.0.0.1:5500"],
  optionsSuccessStatus: 200,
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send("Welcome!");
});
app.listen(8080);
