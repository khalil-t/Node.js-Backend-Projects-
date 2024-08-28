const express=require('express');
const router =express.Router()


const {posturl,geturl}=require('../controllers/index')


router.route('/').post(posturl)
router.route('/:shorturl').get(geturl)

module.exports=router

