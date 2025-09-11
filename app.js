const express = require("express");
const app = express();
const path = require("path");
const cookieparser = require("cookie-parser");
const db = require("./config/mongoose_connection.js");
const ownersRouter = require("./routes/ownersRouter.js");
const usersRouter = require("./routes/usersRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const indexRouter = require("./routes/index.js");
const flash = require("connect-flash");
const expressSession = require("express-session");


require("dotenv").config();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieparser());
app.set("view engine", "ejs");
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
        cookie: { secure: false }
    })
);

app.use(flash());

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", indexRouter);



app.listen(8000);