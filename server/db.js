const mongoose = require("mongoose");

const mongoURI ='mongodb://127.0.0.1:27017/project?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2';

const mongoDB = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
};

module.exports = mongoDB;
