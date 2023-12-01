import express from "express";

const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    // next("route"); // 다다음 미들웨어로 넘어가기 seconde가 호출
    // next(new Error("error")); // 별도의 처리를 하지않으면 이 error가 사용자에게 그대로 노출됩니다.
    if (true) {
      return res.send("Hello");
    }
    res.send("Jiyoon"); // 이와 같이 한개의 콜백에서 두개의 response를 보내게 되면 에러가 발생합니다.
    // Cannot set headers after they are sent to the client
    // 클라이언트에게 한번 보낸 다음에 다시 또 같은 콜백함수에서 보내면 안된다.
    // 그러므로 send를 할 때는 return을 붙여줘서 콜백함수에서 나가도록 해주는것이 좋습니다.
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

// all을 사용하면 해당 경로에 가면 어떤 http request로 보내든 항상 이것이 수행이 됩니다.
// 대신 '/api/doc'으로 접속하면 처리되지 않습니다.
// '/api' 경로에 한해서만 http request 모든 method가 수행이 됩니다.
app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});
app.all("/api/*", (req, res, next) => {
  console.log("all");
  next();
});
// '/sky'로 했을 때도 use가 호출이 되고 그 뒤에 어떤 경로를 하더라도 항상 use가 호출됩니다.
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});
app.get("/", (req, res, next) => {
  console.log("second");
});

// 항상 어플리케이션 마지막에는 에러를 처리하는 것을 달아주어야 합니다.
// 어떤 메소드든지 어떤 경로든 상관없이 에러 핸들러를 달아줍니다.
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});

// 처리할 수 없는 경로에 대해서도 처리를 해줍니다.
app.use((req, res, next) => {
  res.status(404).send("Not available!@_@");
});
app.listen(8080);

// 그러므로 미들웨어는 설정된 순서가 매우 중요하며 next를 해서 다음으로 넘어가든지 처리를 해주어야합니다.
// 그리고 체인상에서 한번 반응을 하고 나면 뒤에 이어지는 미들웨어는 호출되지 않습니다.
