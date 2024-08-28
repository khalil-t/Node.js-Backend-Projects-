// routes/index.js
const express = require('express');
const router = express.Router();
const { upload ,fileupload } = require('../controllers/index');

router.route('/' ).post( upload.single('upfile') ,fileupload)
module.exports = router;
