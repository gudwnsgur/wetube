import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
// home, search 는 videoController
import { getJoin, postJoin, getLogin, postLogin, logout }
         from "../controllers/userController";
// join, login, logout 는 userController

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin); 
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
// 같은 url 로 get || post


globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, logout);

export default globalRouter;