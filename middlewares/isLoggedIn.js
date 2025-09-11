const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel.js");

const isLoggedIn = async (req, res, next) => {

    if (!req.cookies.token) {
        res.flash("You have to login first!!");
        res.redirect("/");
    }

    try {

        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
            .findOne({ email: decoded.email })
            .select("-password");
        req.user = user;
        next();

    }

    catch (err) {
        req.flash("error", "something goes wrong!!");
        res.redirect("/");
    }

}

module.exports = isLoggedIn;