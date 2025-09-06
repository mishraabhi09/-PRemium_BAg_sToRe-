const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel.js");

router.get("/", (req, res) => {
    res.send("Hey , this is the owner router route")
});


if (process.env.NODE_ENV = "development") {
    router.post("/create", async (req, res) => {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res
                .status(503)
                .send("You do not allow to create an owner")
        }

        let { fullname, email, password } = req.body;

        let createdUser = await ownerModel.create({
            fullname,
            email,
            password,

        })
        res.status(201).send(createdUser);
        // console.log(createdUser)
    })
}




module.exports = router;