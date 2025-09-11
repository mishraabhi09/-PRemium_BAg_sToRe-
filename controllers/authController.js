const userModel = require("../models/userModel.js")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken.js");

const registerUser = async (req, res) => {

    try {

        let { fullname, email, password } = req.body;

        let existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(401).send("Already have an Account!! please login");
        }

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {

                if (err) return send(err.messages);

                else {

                    let newUser = await userModel.create({

                        fullname,
                        email,
                        password: hash

                    });

                    console.log("New user Created :", newUser);

                    let token = generateToken(newUser);
                    res.cookie("token", token);
                    res.redirect("/users/login");
                }
            })
        })
    }
    catch (err) {
        console.log(err.message);
    }
};

const loginUser = async (req, res) => {

    try {

        let { email, password } = req.body;

        let user = await userModel.findOne({ email: email.trim() });

        if (!user) return res.status(401).send("user not found!!");

        const match = await bcrypt.compare(password, user.password);

        if (match) {

            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/shop")

        }
        else {
            res.send("token not found!!")
        }

    } catch (err) {
        res.status(500).send(err.message);
    }

};

module.exports = { registerUser, loginUser };