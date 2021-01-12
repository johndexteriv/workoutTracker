const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	exercises: [
		{
			type: {
				type: String,
				trim: true,
				required: "Please select a workout type",
			},
			name: {
				type: String,
				trim: true,
				required: "Please input a workout name",
			},
			duration: {
				type: Number,
				trim: true,
				required: "Please input a workout duration",
			},
			weight: { type: Number },
			reps: { type: Number },
			sets: { type: Number },
			distance: { type: Number },
		},
	],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
