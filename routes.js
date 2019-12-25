import express from "express";

export const userRouter = express.Router();

userRouter.get("/", function(req,res) {
    res.send("user index");
});
userRouter.get("/edit", function(req,res) {
    res.send("user edit");
});
userRouter.get("/password", function(req,res) {
    res.send("user password");
});
