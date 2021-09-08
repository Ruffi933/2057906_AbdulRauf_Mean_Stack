const mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
  courseid: {
    type: String,
    required: "This field is required.",
  },
  coursename: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

mongoose.model("Course", courseSchema);
