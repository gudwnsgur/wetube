import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
// home, search 는 videoController
import { join, login, logout } from "../controllers/userController";
// join, login, logout 는 userController

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;