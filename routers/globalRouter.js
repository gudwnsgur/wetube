import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
// home, search 는 videoController
import { getJoin, postJoin, getLogin, postLogin, logout }
         from "../controllers/userController";
// join, login, logout 는 userController

const globalRouter = express.Router();

// join 
globalRouter.get(routes.join, getJoin); 
globalRouter.post(routes.join, postJoin, postLogin);

// login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

// home
globalRouter.get(routes.home, home);
// search
globalRouter.get(routes.search, search);
// logout
globalRouter.get(routes.logout, logout);

export default globalRouter;