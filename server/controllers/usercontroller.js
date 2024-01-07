const patient = require('../model/patient');
const moongose = require('mongoose');

exports.homeroute = async (req, res) => {
  try {
    const patient_data = await patient.find();
    res.render('home', {patient_data});
  } catch (error) {
    console.log(error);
  }
}
exports.addroute = async (req, res) => {
  try {
    await patient.create({
      name: 'John Doe',
      age: 30,
      gender: 'Male'
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}