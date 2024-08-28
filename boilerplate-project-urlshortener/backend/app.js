// id ++
// stror it in object

// fl get ndir req.params
//check if is exist if exist i will redirect them
//error ida makach

const express=require('express')
require('dotenv').config()
const cors=require('cors')

const router=require('./routes/index')


const app =express()
app.use(express.json())
app.use('/api/shorturl',router)
const port = process.env.PORT || 4000








app.listen(port,()=>{

    console.log(`Server is listening on port ${port}...`)


})