const express = require('express');
const Task=require('./db/connect')
const app = express();
const tasks = require('./routes/tasks'); 
const errortask =require('./middleware/error')
require('./db/connect')
app.use(express.static('./public'))
app.use(express.json());
require('dotenv').config();

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('ttttt');
});

app.use('/api/v1/tasks', tasks);

app.use(errortask)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
