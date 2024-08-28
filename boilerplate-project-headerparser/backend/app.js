
const express = require('express')
require('dotenv').config();
const cors = require('cors'); 

const getdata  =require('./routes/dateRoutes')



const app = express()
app.use(cors());
app.use(express.json())
app.use('/', getdata )
const port =process.env.PORT




app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
  );