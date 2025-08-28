const express = require("express");
const app = express();
const path = require("path");
const cookieparser = require("cookie-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.set("view engine","ejs");


app.get("/login" , function(req , res)
{
    res.send("hey this is login route!!")
})

app.get("/", (req, res) => {
    res.send("chal raha hai!!");
})

app.listen(8000);