import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); // REST API -> Body
// body를 자동으로 파싱해주는데 html에서 form이라는 요소에서 submit을 하게 되면 request가 자동으로 발생하는데
// 그때 전달된 html에서 만든 데이터를 body안으로 자동으로 파싱해주는 것
app.use(express.urlencoded({ extended: false })); // REST API -> Body
const options = {
  dotfiles: "ignore", // 숨겨진 파일은 보여지지 않도록 무시
  etag: false,
  index: false,
  maxAge: "id", // 얼마나 오랫동안 캐시할지
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now()); // 헤더에 보낼때 필요한 데이터가 있으면 헤더에 추가해서 보낼 수 있습니다.
  },
};
app.use(express.static("public", options)); // 사용자가 서버에 있는 데이터를 받기위해서는 response에 파일을 읽어서 전달해주어야합니다.
// static미들웨어를 사용하면 자동을 해줍니다.
// public 폴더 안에 있는 모든 리소스에 대해 접근이 가능합니다.

app.use("/posts", postRouter);
app.use("/user", userRouter);

app.listen(8080);
