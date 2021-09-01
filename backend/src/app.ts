import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import express from "express"
import { config } from "dotenv"
import userRouter from "./resources/user/routes"
import cors from "cors"

config()

var app = express();

// view engine setup

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.all("*",(req ,res)=> {
  res.status(404).json("Route Not Found")
})

module.exports = app;
