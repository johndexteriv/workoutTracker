const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

module.exports = router;

// router.get("/exercise", (req, res) => {
// 	Workout.find({}, (err, data) => {
// 		if (err) {
// 			throw err;
// 		} else {
// 			return res.json(data);
// 		}
// 	});
// });

// or router.get("/exercise");
