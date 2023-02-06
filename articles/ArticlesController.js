const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) => {
    res.send("");
});

router.get("/admin/articles/new",(req,res) => {
    res.send("");
});

module.exports = router;