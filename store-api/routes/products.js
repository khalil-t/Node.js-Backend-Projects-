const express=require('express')
const router = express.Router()
const {getallproductsstatic,getallproducts} =require('../controllers/products')


router.route('/').get(getallproducts)
router.route('/static').get(getallproductsstatic)
module.exports=router
