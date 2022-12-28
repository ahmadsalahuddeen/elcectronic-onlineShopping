const express = require("express");
const admin_route = express();
const session = require("express-session");
admin_route.use(
  session({
    secret: "heyboi",
    cookie: {
      maxAge: 600000000,
    },
    resave: true,
    saveUninitialized: true,
  })
);

const userController = require("../controllers/adminController");
const auth = require("../middleware/adminAuth");

admin_route.get("/", auth.isLogout, userController.loadAdminLogin);
admin_route.post("/", userController.loginValidate);
admin_route.get("/home", userController.loadHome);
admin_route.get("/usermanage", userController.loadUserManagement);
admin_route.get("/logout", auth.isLogin, userController.adminLogout);
admin_route.get("/blockuser/:id", userController.blockUser);
admin_route.get("/unblockuser/:id", userController.unBlockUser);
admin_route.get("/category", userController.loadCategory);
admin_route.get("/addcategory", userController.loadAddCategory);
admin_route.post("/addcategory", userController.AddCategory);
admin_route.get("/editcategory", userController.loadEditcategory);
admin_route.post("/changecat", userController.editCategory);

admin_route.get("*", function (req, res) {
  res.redirect("/admin");
});

module.exports = admin_route;