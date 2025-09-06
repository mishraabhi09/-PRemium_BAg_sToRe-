const mongoose = require("mongoose");
const debug = require("debug")("development:mongoose");
const config = require("config");

// $env:DEBUG="development:*"; node app.js -->> this is the way to set up in the terminal 

mongoose
    .connect(`${config.get
        ("MONGO_URI")}/
         PRemium_BAg_stoRE}`)
    .then(() => {
        // console.log("Db is connected!!");
        debug("Server started...")
    })
    .catch((err) => {
        // console.log(err.message);
        debug(err.message);
    });

module.exports = mongoose.connection;
