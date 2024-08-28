const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_UR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure code
  }
};

// Define the Task schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'Product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Use function to get the current date
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
  },
});

// Create the Task model
const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task, connectDB };
