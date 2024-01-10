const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const centreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  capacity: {
    type: String,
    required: true
  },
});
const Centre = mongoose.model('Centre', centreSchema);
module.exports = Centre;