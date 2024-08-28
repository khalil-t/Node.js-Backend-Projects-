const express = require('express');
const router = express.Router();
const {postdata,getdata,getform ,logs} = require('../controllers/index'); 

router.route('/').post(postdata);
router.route('/').get(getdata);
router.route('/:_id/exercises').post(getform);
router.route('/:id/logs').get(logs);


module.exports = router;
