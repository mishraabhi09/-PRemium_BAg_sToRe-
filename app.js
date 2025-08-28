const express = require("express");
const app = express();

const path = require("path");


app.get("/", (req, res) => {
    res.send("chal raha hai!!");
})

app.listen(8000);