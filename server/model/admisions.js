var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    prec: {type: Object, required: false},
    Doctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
    centre: {type: Schema.Types.ObjectId, ref: 'Centre'},
    admitted: {type: Date, required: true, default: Date.now},
    discharge: {type: Date, required: false},
});

const Admision = mongoose.model('Admision', schema);
module.exports = Admision;