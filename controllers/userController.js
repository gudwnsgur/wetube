import routes from "../routes";
import User from "../models/User";

export const getJoin = function(req, res) {

    res.render("join", {pageTitle : "Join"});
};

export const postJoin = async function (req, res) {
    const {
        body : {name, email, password, password2}
    } = req;

    if(password != password2) {
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } 
    else {
        try{
            const user = await User({
                name, email
            });
        await User.register(user, password);
        } catch(error) {
            console.log(error);
        }
        res.redirect(routes.home);
    }

};

export const getLogin = function(req, res) {
    res.render("login", {pageTitle : "Log In"});
};
export const postLogin = function(req, res) {  
    const {
        body : {email, password}
    } = req;
    res.redirect(routes.home);
};

export const logout  = function (req, res) {
    // To Do: Process Log Out
    res.redirect(routes.home);
  };
  


export const userDetail = function(req, res) {
    res.render("userDetail", {pageTitle : "User Detail"});
};
export const editProfile = function(req, res) {
    res.render("editProfile", {pageTitle : "Edit Profile"});
};
export const changePassword = function(req, res) {
    res.render("changePassword", {pageTitle : "Change Password"});
};