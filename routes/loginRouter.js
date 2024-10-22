const passport = require("passport");

const loginRouter = require("express").Router();


// Login
const loginController = require("../controller/loginController");
loginRouter.get("/", loginController.loginGet)
loginRouter.post("/", passport.authenticate)
