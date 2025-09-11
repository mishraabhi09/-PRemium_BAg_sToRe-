const mongoose = require("mongoose");

// mongoose.connect("mongodb//127.0.0.1:27017/PRemium_BAg_stoRE");

const userModel = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [],
    isAdmin: Boolean,
    order: {
        type: Array,
        default: []
    },

    contach: Number,
    picture: String,

});

module.exports = mongoose.model("user", userModel);