"use strict";
var mongoose = require("mongoose");
var reviewSchema = mongoose.Schema({
	criterias:[{selection:Number, description:String}],
	totalScore:Number,
	comments:String
});

module.exports = mongoose.model("review", reviewSchema);