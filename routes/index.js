import path from "path"
import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // const html_file = path.join(__dirname, "public", "index.html")
    // console.log(html_file)
    res.send("Why are you not working bro");
});

export default router
