const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  DOB:{
    type: Date,
    required: false
  },
});
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;