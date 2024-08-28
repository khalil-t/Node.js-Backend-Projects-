const jwt = require("jsonwebtoken")
const { BadRequestError } = require('../errors/custom-error')
require('dotenv').config();

const login =async(req,res)=>{
    const { username, password }=req.body
    const id = new Date().getDate()
if(!username || !password){
    throw new BadRequestError('Please provide email and password')
}
const token= jwt.sign({username, password}, process.env.JWT_SECRET,{expiresIn: '1h' })

res.status(200).json({msg: 'Login successful', token})


}
const dashboard =async(req,res)=>{
    const luckyNumber = Math.floor(Math.random() * 100)

    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
      return  res.status(404).json({ error: 'Resource not found' });
    }

     const token =authHeader.split(' ')[1]

    try{
const data= jwt.verify(token,process.env.JWT_SECRET)
req.user= data
console.log(req.user)


    }
    catch(err){
        return res.status(401).json({error: 'Token is invalid or expired'})
    }
    return  res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
      })
}
module.exports={
    login,
    dashboard,

}




