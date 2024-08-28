
const express = require('express')
require('dotenv').config();
const cors = require('cors'); 
const path = require('path');

const router =require('./routes/index')



const app = express()

app.use(cors());
app.use(express.json())
app.use('/', router  )
const port =  process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

app.use('/api/fileanalyse', router);
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
 