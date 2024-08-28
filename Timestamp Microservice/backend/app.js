
const express = require('express')
require('dotenv').config();
const cors = require('cors'); 

const TaskRouter  =require('./routes/dateRoutes')



const app = express()
app.use(cors());
app.use(express.json())
app.use('/', TaskRouter )
const port =process.env.PORT ||5000




app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
  );