const errortask= (req,res)=>{


res.status(500).json({ msg: 'Something went wrong, please try again' })

}
module.exports=errortask;