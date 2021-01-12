const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

module.exports = router;

router.get("/api/workouts", (req, res) => {
	Workout.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			return res.json(data);
		}
	});
});

router.get("/api/workouts/range", (req, res) => {
	Workout.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			return res.json(data);
		}
	}).limit(7);
});

router.post("/api/workouts", ({ body }, res) => {
	console.log(body);
	Workout.create(body, (err, data) => {
		if (err) {
			throw err;
		} else {
			res.json(data);
		}
	});
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
	Workout.findByIdAndUpdate(
		{ _id: params.id },
		{ $push: { exercises: body } },
		(err, data) => {
			if (err) {
				throw err;
			} else {
				res.json(data);
			}
		}
	);
});
