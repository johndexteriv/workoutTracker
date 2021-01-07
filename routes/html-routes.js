const router = require("express").Router();
var path = require("path");

module.exports = router;

router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname + "../../public/exercise.html"));
});
