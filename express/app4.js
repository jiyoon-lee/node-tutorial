import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

app.get("/file", (req, res) => {
  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("/file1.txt");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get("/file2", (req, res) => {
  fsAsync //
    .readFile("file2.txt")
    .then((data) => res.send(data))
    .catch((error) => {
      res.sendStatus(404);
    });
});

app.get("/file3", async (Req, res) => {
  try {
    const data = await fsAsync.readFile("/file2.txt");
    res.send(data);
  } catch (e) {
    res.sendStatus(404);
  }
});

// promise는 비동기이고 미들웨어가 끝나는 순간 프로미스가 아직처리가 되지않아
// 콜백함수가 끝나고 나서 프로미스가 처리가 되고 캐치가 되기 때문에
// 마지막에 처리할 수 있는 체이닝이 비동기적으로 되어있어 마지막의 비동기 처리가 되지않습니다.

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
