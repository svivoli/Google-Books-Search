const path = require("path");
const router = require ("express").Router;

router.arguments(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})