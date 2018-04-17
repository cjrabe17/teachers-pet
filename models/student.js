const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: "http://via.placeholder.com/200x200"
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;