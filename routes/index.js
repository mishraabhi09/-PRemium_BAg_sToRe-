const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedIn.js");

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });
});

router.get("/users/register", (req, res) => {
    res.render("index");
});

router.get("/users/login", (req, res) => {
    res.render("login")
});


router.get("/shop", isLoggedin, (req, res) => {
    res.render("shop")

});


module.exports = router;