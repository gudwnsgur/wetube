const express = require("express"); // import express from "express";
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

import {localsMiddleware} from  "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(helmet());  // for security
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

// express 의 use : 모든 url의 middleware 로 사용하겠다.
// url들의 (get, post) 상단에 위치해야 한다.
// middleware 에서 send 가 일어나면 연결이 끊긴다.

// router
app.use(routes.home, globalRouter);  
app.use(routes.users, userRouter);  // /user url에 접속하면 userRouter 전체를 사용하겠다.
app.use(routes.videos, videoRouter);

export default app;


/*
1.
app.use(function(req, res, next) {
});

2.
app.use( function(req, res, next) {
});

3.
const localsMiddleware = function(req, res, next) {
};  
app.use(localsMiddleware);

다 동일
*/