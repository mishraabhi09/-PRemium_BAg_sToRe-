const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/PRemium_BAg_stoRE")
    .then(() => {
        console.log("Db is connected!!");
    })
    .catch((err) => {
        console.log(err.message);
    });

module.exports = mongoose.connection;
