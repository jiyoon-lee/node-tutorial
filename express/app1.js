import express from "express";

const app = express();

// http://localhost:8080/sky/jiyoon?keyword=bts
app.get("/sky/:id", (req, res, next) => {
  console.log(req.path); // /sky/jiyoon
  // console.log(req.headers);
  console.log(req.params); // { id: 'jiyoon' }
  console.log(req.query); // { keyword: 'bts' }

  // res.send("hi");
  // res.json({ name: "Jiyoon" });
  // res.sendStatus(400);
  res.setHeader("key", "value");
  res.status(201).send("created");
});
app.listen(8080);
