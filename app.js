const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const {userRouter} = require('./router');

const app = express ();

function handleHome(req, res) {
    res.send('hell');
}

function handleProfile(req, res) {
    res.send("you are on my profile");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use(helmet());  // for security
app.use(morgan("dev"));
// express 의 use : 모든 url의 middleware 로 사용하겠다.
// url들의 (get, post) 상단에 위치해야 한다.
// middleware 에서 send 가 일어나면 연결이 끊긴다.

app.use('/user', userRouter); 
// /user url에 접속하면 userRouter 전체를 사용하겠다.

app.get('/', handleHome);
app.get('/profile', handleProfile);

export default app;