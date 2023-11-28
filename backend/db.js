const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://foodDelivery:1234@cluster0.oxtova8.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'

const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true})
} 
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
    // You can start your application logic here.
  });

module.exports = mongoDB;