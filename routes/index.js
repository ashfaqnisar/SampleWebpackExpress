var express = require('express');
var router = express.Router();
var path = require("path")
var html_file = path.join("../public/index.html")
/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(html_file);
});

module.exports = router;
