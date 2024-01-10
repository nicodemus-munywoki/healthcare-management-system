const patient = require('../model/patient');
const doctor = require('../model/doctor');
const centre = require('../model/centre');

const moongose = require('mongoose');
const Admision = require('../model/admisions');

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

exports.addDoc = async (req, res) => {
  try {
    await doctor.create({
      name: 'John Doe',
      gender: 'Male'
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

exports.addCentre = async (req, res) => {
  try {
    await centre.create({ 
      name: 'Lumino',
      location: 'Kakamega',
      capacity: '100'
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

exports.addAdm = async (req, res) => {
  try {
    await Admision.create({
      patient: req.patient,
      doctor: req.doctor,
      centre: req.centre,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}