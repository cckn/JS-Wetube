import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400);
    res.redirect(routes.join);
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home)
};

export const logout = (req, res) => {
  res.render("logout", { pageTitle: "Logout" });
};
export const users = (req, res) => {
  res.render("users", { pageTitle: "Users" });
};
export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "UserDetail" });
};
export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "EditProfile" });
};
export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "ChangePassword" });
};
