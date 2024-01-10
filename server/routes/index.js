const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/', usercontroller.homeroute);
router.get('/addDoc', usercontroller.addDoc);
router.get('/addCentre', usercontroller.addCentre);
router.get('/add', usercontroller.addroute);
router.get('/addAdm', usercontroller.addAdm);

module.exports = router;