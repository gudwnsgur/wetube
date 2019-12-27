
export const join = function(req, res) {
    res.render("join", {pageTitle : "Join"});
};
export const login = function(req, res) {
    res.render("login", {pageTitle : "Log In"});
};
export const logout = function(req, res) {
    res.render("logout", {pageTitle : "Log Out"});
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