const express=require('express') 
const app= express()
const errorh=require('./middleware/error-handler')
const notfound=require('./middleware/not-found')
const productsRouter  =require('./routes/products')
const { connectDB } = require('./db/connect'); // Import connectDB

connectDB();


app.use(express.json())

app.use('/api/v1/products',productsRouter )

app.use(errorh)
app.use(notfound)
const port = process.env.PORT || 4000;
app.listen(port,()=>{

console.log(`Server is listening on port ${port}`)

})


//
