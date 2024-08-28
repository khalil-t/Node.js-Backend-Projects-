const express = require('express');
const router = express.Router();

// Destructure the imported object to get specific functions
const { getDateinfo } = require('../controllers/dateController');

// Use the specific functions as route handlers
router.route('/api/:date?').get(getDateinfo);

module.exports = router;
