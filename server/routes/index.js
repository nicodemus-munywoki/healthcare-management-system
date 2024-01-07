const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/', usercontroller.homeroute);
router.get('/add', usercontroller.addroute);

module.exports = router;