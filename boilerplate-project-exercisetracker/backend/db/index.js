const mongoose = require('mongoose');
const Schema =mongoose.Schema


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));



const userSchema =new Schema({

  username: { type: String, required: true, unique: true },
 exercise: [
  {
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  }

]

}

)


const User=mongoose.model('User', userSchema)

 module.exports=User;

