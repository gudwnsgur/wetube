// render 첫 번째 인자 : templates
// render 두 번째 인자 : template에 추가할 정보가 담긴 Object
import {videos} from "../db"

export const home = function (req, res) {
    res.render("home", { pageTitle: "Home", videos}); 
};

export const search = function (req, res) {
    const {
        query : {term: searchingBy}
    } = req;

    res.render("search", {pageTitle : "Search", searchingBy});
    // const searchingBy = req.query.term;
    // res.render("search", {pageTitle : "Search", searchingBy:searchingBy});

};

export const upload = function (req, res) {
    res.render("upload", {pageTitle : "Upload"});
};
export const videoDetail = function (req, res) {
    res.render("videoDetail", {pageTitle : "Video Detail"});
};
export const editVideo = function (req, res) {
    res.render("editVideo", {pageTitle : "Edit Video"});
};
export const deleteVideo = function (req, res) {
    res.render("deleteVideo", {pageTitle : "Delete Video"});
};