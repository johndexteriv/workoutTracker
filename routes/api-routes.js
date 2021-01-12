const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

module.exports = router;

router.post("/api/workouts", ({ body }, res) => {
	Workout.create(body)
		.then((dbTransaction) => {
			res.json(dbTransaction);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
	Workout.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } })
		.then((dbTransaction) => {
			res.json(dbTransaction);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

//Finish range apiroute

// router.get("/api/workouts", (req, res) => {
// 	Workout.find().limit(5),
// 		(err, data) => {
// 			if (err) {
// 				throw err;
// 			} else {
// 				return res.json(data);
// 			}
// 		};
// });

query.limit(20);

router.get("/api/workouts", (req, res) => {
	Workout.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			return res.json(data);
		}
	});
});
