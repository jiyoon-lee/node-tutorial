import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import "express-async-errors";
const app = express();

app.use(express.json());

app
  .route("/posts")
  .get((req, res, next) => {
    res.status(201).send("GET: /posts");
  })
  .post((req, res) => {
    res.status(201).send("POST: /posts");
  });

app //
  .route("/posts/:id")
  .put((req, res) => {
    res.status(201).send("PUT /posts/:id");
  })
  .delete((req, res) => {
    res.status(201).send("DELETE: /posts/:id");
  });

app.listen(8080);
