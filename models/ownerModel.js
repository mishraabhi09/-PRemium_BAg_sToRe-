const mongoose = require("mongoose");

const ownerModel = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 5,
        trim: true
    },
    email: {
        type: String,

    },
    password: String,
    product: {
        type: String,
        default: 0
    },
    picture: String,
    gstin: String


});

module.exports = mongoose.model("owner", ownerModel);