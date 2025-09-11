const jwt = require("jsonwebtoken");

const generateToken = (newUser) => {
    return jwt.sign({
        email: newUser.email, userId: newUser._id

    }, process.env.JWT_KEY, {
        expiresIn: "1h"
    });
};

module.exports.generateToken = generateToken;