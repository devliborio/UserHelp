const express = require("express");
const router = express.Router();

router.get("/admin/articles/new",(req,res) => {
    res.send("");
});

module.exports = router;