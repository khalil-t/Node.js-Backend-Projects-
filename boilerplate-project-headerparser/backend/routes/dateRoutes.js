const express = require('express');
const router = express.Router();

// Destructure the imported object to get specific functions
const { getdata } = require('../controllers/dateController');

// Use the specific functions as route handlers
router.route('/api/whoami').get(getdata);

module.exports = router;
