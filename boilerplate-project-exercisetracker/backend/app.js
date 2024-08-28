
const express = require('express')
require('dotenv').config();
const cors = require('cors'); 
const path = require('path');

const router =require('./routes/index')



const app = express()

app.use(cors());
app.use(express.json())
app.use('/api/users', router  )


const port =process.env.PORT




app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
  );
 