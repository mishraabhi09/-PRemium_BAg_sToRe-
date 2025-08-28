const mongoose = require("mongoose");

const productModel = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    bgcolor: String,
    textcolor: String,
    panelcolor: String,
    discount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("product", productModel);