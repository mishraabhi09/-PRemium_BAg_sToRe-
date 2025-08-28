const express = require("express");
const router = express.Router();

router.get("/" , (req, res)=>{
    res.send("Hey , this is the product router route")
});

module.exports = router;