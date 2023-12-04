import express from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import tweetRouter from "./router/tweets.js";
import authRouter from "./router/auth.js";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/tweets", tweetRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

const server = app.listen(8080);
const socketIO = new Server(server, { cors: { origin: "*" } });
socketIO.on("connection", (socket) => {
  console.log("Client is here!");
  socketIO.emit("dwitter", "Hello 😘"); // 첫번째 인자 해당하는 주젳
  socketIO.emit("dwitter", "Hello 😘");
});
