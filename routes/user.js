const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const ListingController = require("../controllers/users.js");


router.route("/signup")
    .get(ListingController.renderSignupForm)
    .post(wrapAsync(ListingController.signup));

router.route("/login")
    .get(ListingController.renderLoginForm)
    .post(passport.authenticate("local", { failureRedirect: '/login', failureFlash : true,}), saveRedirectUrl, ListingController.login);

router.get("/logout", ListingController.logout);

module.exports = router;