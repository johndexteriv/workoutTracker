const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	type: String,
	name: String,
	duration: Number,
	weight: Number,
	reps: Number,
	sets: Number,
	distance: Number,
});

const Workout = mongoose.model("Workout", workoutSchema);
// const Resistance = mongoose.model("Resistance", resistanceSchema);
// const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Workout;
// module.exports = Resistance;
// module.exports = Cardio;
