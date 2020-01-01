import routes from "./routes";

export const localsMiddleware = function (req, res, next) {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 1
    }
    // res.locals.변수명
    // 해당 변수명은 template 에 변수명처럼 존재하게 된다.
    next();
};