// https://express-validator.github.io/docs

import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  "/users",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("이름을 입력해")
      .isLength({ min: 2, max: 10 })
      .withMessage("이름은 두글자 이상!"),
    body("age").notEmpty().isInt().withMessage("숫자를 입력해"),
    body("email").isEmail().withMessage("이메일을 입력해").normalizeEmail(),
    body("job.name").notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);
app.get(
  "/:email",
  [param("email").isEmail().withMessage("이메일을 입력해주세요."), validate],
  (req, res, next) => {
    res.send("🔥🔥");
  }
);

app.listen(8080);

// {
//     "name": "El",
//     "age": "Asdf",
//     "job": {
//         "name": "DC Academy",
//         "title": "Instructor"
//     },
//     "email": "ellie@server.com"
// }

// validation 서버에서 빠르게 유효성 검사를 해야하는 포인트는
// 데이터베이스에서 데이터를 읽고쓰고 하기전에 데이터베이스가 같은 서버에 있을 수도 있지만
// 다른 클랄이언트에 있을 때 네트워크 비용이 발생할 수 있습니다.
// 시간과 비용을 절약하기 위해서 저장하기전에 데이터가 유효한지 유효성 검사를 하는 것이 좋습니다.
// sanitization | normalization 데이터를 일관성있게 보관하기 위해

// Contract Testing: Client-Server
// Proto-based client-server
